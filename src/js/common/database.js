const shortid = require('shortid')
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ&@');
const Datastore = require('nedb');
const categorys = new Datastore({
	filename: 'category',
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
		getAll(callback) {
			categorys.find({}, callback);
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
			}, callback);
		},
		//function(err, newDoc)
		push(data, callback) {
			categorys.insert(data, callback);
		}
	},
	Bookmark: {

	}
};

export default Database;
