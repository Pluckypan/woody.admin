import Ajax from './ajax';
const SEP = "/"
const _API = "https://api.github.com"
const _GIST = _API + SEP + "gists" + SEP
const Github = {
	Gist: {
		get(id,token) {
			return Ajax.get(_GIST+id);
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
