import axios from 'axios';
import qs from 'qs';
const SEP = "/"
const _API = "https://api.github.com"

var instance = axios.create({
	baseURL: _API
});

const Github = {
	Gist: {
		auth(token) {
			instance.defaults.headers.common['Authorization'] = token;
			instance.defaults.headers.common['Accept'] = 'application/vnd.github.v3.raw+json';
		},
		get(id) {
			return instance.get("/gists/" + id);
		},
		edit(id,jsonFile) {
			return instance({
				method: 'post',
				dataType: 'JSON',
				url: "/gists/" + id,
				data: JSON.stringify(jsonFile)
			});
		}
	},
	Repo: {
		login(param) {
			return Ajax.postJson("/login", param);
		},
		logout(param) {
			return Ajax.post("/logout", param);
		}
	}
};

export default Github;
