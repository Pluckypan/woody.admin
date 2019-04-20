import DB from './database'
const Runner = {
	// callback(err,data)
	sync(callback) {
		let _gist = Utils.getLocal('gist');
		let _token = Utils.getLocal('token');
		GH.Gist.auth(_token);
		GH.Gist.get(_gist)
			.then(function(response) {
				if (response.status == 200) {
					let files = response.data.files
					let category = files['category.json']
					var iCats = (category && category.content) ? Utils.safeParse(category.content) : [];
					iCats = Utils.isArray(iCats) ? iCats : []
					let bookmark = files['bookmark.json']
					let iBooks = (bookmark && bookmark.content) ? Utils.safeParse(bookmark.content) : [];
					iBooks = Utils.isArray(iBooks) ? iBooks : []
					callback(0, {
						category: iCats,
						bookmark: iBooks
					})
				} else {
					callback(1, response.status)
				}
			})
			.catch(function(error) {
				callback(-1, error)
			});
	},
	// callback(err,data)
	submit(callback) {
		DB.getAll(function(cats, bookmarks) {
			let _gist = Utils.getLocal('gist');
			let _token = Utils.getLocal('token');
			GH.Gist.auth(_token);
			var jsonFile = {
				files: {
					'category.json': {
						content: JSON.stringify(cats)
					},
					'bookmark.json': {
						content: JSON.stringify(bookmarks)
					}
				}
			};
			GH.Gist.edit(_gist, jsonFile)
				.then(function(response) {
					if (response.status == 200) {
						callback(0, response.data)
					} else {
						callback(1, response.status)
					}
				})
				.catch(function(error) {
					callback(-1, error)
				});
		});
	}
}

export default Runner;
