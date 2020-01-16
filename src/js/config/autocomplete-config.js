import jsonp from 'fetch-jsonp';

const loadData = function(filter, callback) {
	jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
		.then(response => response.json())
		.then((d) => {
			const result = d.result;
			const data = [];
			result.forEach((r) => {
				data.push({
					name: r[0],
					id: r[1],
				});
			});
			callback(data);
		});
}

const baiduLoadData = function(filter, callback) {
	if (filter == null || filter.length == 0) {
		return;
	}
	jsonp(`http://suggestion.baidu.com/su?wd=${filter}&p=3&cb=callback`, {
			jsonpCallbackFunction: 'callback',
		})
		.then(response => response.json())
		.then((d) => {
			callback(d.s);
		});
}

const woodySearch = function(keyword, callback) {
	if (keyword == null || keyword.length == 0) {
		return;
	}
	let where = {
		name: {
			$regex: eval("/" + keyword + "/")
		}
	}
	DB.Bookmark.getAll(where, function(err1, bookmarks) {
		let iBooks = (!err1 && bookmarks && bookmarks.length > 0) ? bookmarks : [];
		callback(iBooks)
	})
}

export default function() {
	return {
		globalSearch: {
			loadData: baiduLoadData,
			minWord: 1
		},
		woodySearch: {
			loadData: woodySearch,
			keyName: 'id',
			titleName: 'name',
			minWord: 1
		},
		simple: {
			loadData,
			keyName: 'id',
			titleName: 'name',
			minWord: 1
		},
		baidu: {
			loadData: baiduLoadData,
			minWord: 0
		},
		company: {
			loadData(filter, next) {
				let list = [];
				for (let i = 0; i < 10; i++) {
					list.push({
						id: `${i}`,
						name: `${filter}${i}`
					})
				}
				next(list)
			},
			keyName: 'id',
			titleName: 'name'
		},
		account: {
			loadData(filter, next) {
				let list = [];
				let companyId = this.companyId;
				let companyName = this.companyName;
				for (let i = 0; i < 10; i++) {
					list.push({
						id: `${companyId}-account${i}`,
						name: `${companyName}-account${filter}${i}`
					})
				}
				next(list)
			},
			keyName: 'id',
			titleName: 'name'
		}
	}
};
