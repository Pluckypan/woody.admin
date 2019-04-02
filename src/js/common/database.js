const shortid = require('shortid')
import manba from 'manba';
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
		//function (err, doc)
		find(id,callback){
			categorys.findOne({ id: id },  callback);
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
		}
	},
	Bookmark: {

	}
};

export default Database;
