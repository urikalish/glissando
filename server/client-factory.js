const logger = require('./logger');
const helper = require('./helper');

class GlissandoClient {
	constructor() {
		this.name = helper.generateRandomName(6);
		this.id = helper.generateRandomId();
		this.socket = null;
		this.socketId = '';
		this.isConnected = false;
		logger.log(`client #${this.id} (${this.name}) created`);
	}

	onConnect(socket) {
		this.socket = socket;
		this.socketId = socket.id;
		this.isConnected = true;
		logger.log(`client #${this.id} (${this.name}) connected via socket ${this.socketId}`);
	}

	onDisconnect() {
		this.isConnected = false;
		logger.log(`client #${this.id} (${this.name}) disconnected via socket ${this.socketId}`);
	}

	onMsgAddOne(data) {
		if (this.isConnected) {
			this.socket.emit('s2c-add-one', {
				val: data.val + 1,
			});
		}
	}
}

exports.createClient = socket => {
	return new GlissandoClient(socket);
};
