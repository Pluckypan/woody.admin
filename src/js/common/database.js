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
	}
};

export default Database;
