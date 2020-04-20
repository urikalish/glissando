const logger = require('./logger');
const helper = require('./helper');

class Show {
	constructor() {
		this.name = helper.generateRandomName(6);
		this.id = helper.generateRandomId();
		logger.log(`show #${this.id} (${this.name}) created`);
	}
}

exports.createShow = () => {
	return new Show();
};
