import utils from 'hey-utils';

export default utils.extend({}, utils, {
	safeParse(str) {
		try {
			return JSON.parse(str)
		} catch (e) {
			return null
		}
	}
});
