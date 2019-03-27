import low from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'

const adapter = new LocalStorage('woody')
const shortid = require('shortid')
const db = low(adapter)

db.defaults({
	category: [],
	bookmark: []
}).write()

const Database = {
	IDMaker: {
		gen(){
			return shortid.generate()
		}
	},
	Category: {
		getAll() {
			return db.get("category").value()
		},
		clearAll(){
		db.get("category").remove().write()
		},
		push(data) {
			if (!data) return
			return db.get('category')
				.push(data)
				.write()
				.id
		}
	},
	Bookmark: {

	}
};

export default Database;
