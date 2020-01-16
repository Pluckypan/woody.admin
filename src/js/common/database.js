const shortid = require('shortid')
import manba from 'manba';
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&=');
const Datastore = require('nedb');
const RootCat = {
	title: '根',
	key: 'root'
};
const categorys = new Datastore({
	filename: 'category',
	autoload: true
});
const bookmarks = new Datastore({
	filename: 'bookmark',
	autoload: true
});

function sortObjectKeys(obj) {
	var tmp = [];
	Object.keys(obj).sort().forEach(function(k) {
		tmp.push({
			key: k,
			num: obj[k]
		})
	});
	return tmp;
}

const Database = {
	IDMaker: {
		gen() {
			return shortid.generate()
		}
	},
	Category: {
		//function(err, docs)
		getAll(nameFilter, callback) {
			var where = {};
			if (nameFilter) {
				where = {
					name: {
						$regex: eval("/" + nameFilter + "/")
					}
				}
			}
			categorys.find(where).sort({
				create_time: -1
			}).exec(callback);
		},
		//function(err, docs)
		search(where = {}, limit = 0, callback) {
			categorys.find(where).sort({
				create_time: -1
			}).limit(limit).exec(callback);
		},
		//function (err, doc)
		find(id, callback) {
			categorys.findOne({
				id: id
			}, callback);
		},
		//function (err, count)
		getAllCount(callback) {
			categorys.count({}, callback);
		},
		//function (err, count)
		getThreeMonthCount(callback) {
			const min = manba().add(-3, manba.MONTH).format("f")
			categorys.count({
				create_time: {
					$gte: min
				}
			}, callback);
		},
		//function(err, docs)
		getThreeMonth(callback) {
			const min = manba().add(-3, manba.MONTH).format("f")
			categorys.find({
				create_time: {
					$gte: min
				}
			}, callback);
		},
		//function(err, numRemoved)
		clearAll(callback) {
			categorys.remove({}, {
				multi: true
			}, callback);
		},
		//function(err, numRemoved)
		remove(data, callback) {
			categorys.remove({
				id: data.id
			}, {}, callback);
		},
		//function(err, numRemoved)
		removeArray(arr, callback) {
			const ids = arr.map(function(item) {
				return item.id;
			});
			console.log(ids)
			categorys.remove({
				id: {
					$in: ids
				}
			}, {
				multi: true
			}, callback);
		},
		//function(err, newDoc)
		push(data, callback) {
			categorys.insert(data, callback);
		},
		// function(err, numReplaced)
		update(data, callback) {
			categorys.update({
				id: data.id
			}, data, {}, callback);
		},
		// function(err, cats)
		findCats(callback) {
			categorys.find({}).sort({
				create_time: -1
			}).exec(function(err, docs) {
				if (docs && docs.length > 0) {
					const arr = docs.map(function(item) {
						return {
							title: item.name,
							key: item.id
						};
					});
					const cats = [RootCat].concat(arr);
					callback(0, cats)
				} else {
					callback(err, [RootCat])
				}
			});
		}
	},
	Bookmark: {
		//function(err, newDoc)
		push(data, callback) {
			bookmarks.insert(data, callback);
		},
		//function(err, docs)
		getAll(where, callback) {
			bookmarks.find(where).sort({
				create_time: -1
			}).exec(callback);
		},
		//function (err, doc)
		find(id, callback) {
			bookmarks.findOne({
				id: id
			}, callback);
		},
		//function(err, numRemoved)
		remove(data, callback) {
			bookmarks.remove({
				id: data.id
			}, {}, callback);
		},
		//function(err, numRemoved)
		removeArray(arr, callback) {
			const ids = arr.map(function(item) {
				return item.id;
			});
			console.log(ids)
			bookmarks.remove({
				id: {
					$in: ids
				}
			}, {
				multi: true
			}, callback);
		},
		// function(err, numReplaced)
		update(data, callback) {
			bookmarks.update({
				id: data.id
			}, data, {}, callback);
		},
		findTags(limit, callback) {
			bookmarks.find({}).sort({
				create_time: -1
			}).exec(function(err, docs) {
				if (docs && docs.length > 0) {
					const tmp = docs.filter(function(item) {
						return item.tag && item.tag.length > 0;
					}).map(function(item) {
						return item.tag
					})
					const obj = [].concat.apply([], tmp).reduce((pre, cur) => {
						if (cur in pre) {
							pre[cur]++
						} else {
							pre[cur] = 1
						}
						return pre
					}, {});
					const tags = sortObjectKeys(obj);
					callback(0, tags.slice(0, limit))
				} else {
					callback(err, [])
				}
			});
		}
	},
	//callback(cats,books)
	getAll(callback) {
		this.searchAll(null, callback)
	},
	searchAll(keyword, callback) {
		let that = this
		that.Category.getAll(keyword, function(err0, cats) {
			let iCats = (!err0 && cats && cats.length > 0) ? cats : [];
			let where = keyword != null && keyword.length > 0 ? {
				name: {
					$regex: eval("/" + keyword + "/")
				}
			} : {};
			that.Bookmark.getAll(where, function(err1, bookmarks) {
				let iBooks = (!err1 && bookmarks && bookmarks.length > 0) ? bookmarks : [];
				callback(iCats, iBooks)
			})
		})
	}
};

export default Database;
