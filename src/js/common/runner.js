import DB from './database'
const Runner = {
	// callback(err,data)
	sync(callback) {
		let _gist = Utils.getLocal('gist');
		let _token = Utils.getLocal('token');
		console.log("gist =" + _gist);
		if (_gist == null || _gist == "null" || _token == null || _token == "null") {
			callback(-2, "invalid token");
			return;
		}
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
					iBooks = Utils.isArray(iBooks) ? iBooks : [];
					console.log(response.data);
					let owner = response.data.owner;
					owner.gist_url = response.data.html_url;
					owner.gist_description = response.data.description;
					owner.gist_created_at = response.data.created_at;
					owner.gist_updated_at = response.data.updated_at;
					callback(0, {
						category: iCats,
						bookmark: iBooks,
						owner: owner
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
			console.log("gist =" + _gist);
			if (_gist == null || _gist == "null" || _token == null || _token == "null") {
				callback(-2, "invalid token");
				return;
			}
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
