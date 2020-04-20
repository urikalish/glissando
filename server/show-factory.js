const logger = require('./logger');
const helper = require('./helper');

class Show {
	constructor() {
		this.name = helper.generateRandomName(6);
		this.id = helper.generateRandomId(6);
		logger.log(`show created. id:${this.id}, name:${this.name}`);
	}
}

exports.createShow = () => {
	return new Show();
};
