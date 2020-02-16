import axios from 'axios';
import manba from 'manba';
const _API = "http://www.1991th.com/hook/"

var instance = axios.create({
	baseURL: _API
});

const Voblet = {
	tags(token) {
		return instance.get("/voblet.php?method=tags&token=" + token);
	},
	bookmark(token) {
		return instance.get("/voblet.php?method=bookmark&token=" + token);
	},
	sync(token, callback) {
		let that = this;
		axios.all([this.tags(token), this.bookmark(token)])
			.then(axios.spread(function(tagsRep, bookmarksRep) {
				var cats = [];
				if (tagsRep.data && tagsRep.data.tags && tagsRep.data.tags.length > 0) {
					cats = tagsRep.data.tags.map(function(itm) {
						return {
							pid: "root",
							id: itm.itemId,
							name: itm.name,
							desc: "",
							order: 0,
							create_time: manba(itm.created).format('f'),
						};
					});
				}
				var bookmarks = [];
				if (bookmarksRep.data && bookmarksRep.data.bookmarks && bookmarksRep.data.bookmarks.length > 0) {
					bookmarks = bookmarksRep.data.bookmarks.map(function(itm) {
						let cid = itm.tagIds && itm.tagIds.length > 0 ? itm.tagIds[0] : "root"
						return {
							"cid": cid,
							"id": itm.itemId,
							"name": itm.urlTitle,
							"desc": itm.note,
							"tag": [],
							"hot": false,
							"url": itm.url,
							"order": 0,
							"icon": itm.urlIcon,
							"cover": itm.urlImage,
							"type": 0,
							"create_time": manba(itm.created).format('f'),
						};
					});
				}
				if (cats && cats.length > 0) {
					DB.Category.push(cats);
				}
				if (bookmarks && bookmarks.length > 0) {
					DB.Bookmark.push(bookmarks);
					callback({
						tags: cats,
						bookmarks: bookmarks
					})
				} else {
					callback(null)
				}
			})).catch(function(err) {
				console.log(err);
				callback(null)
			});
	}
};

export default Voblet;
