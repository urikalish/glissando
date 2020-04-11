const logger = require('./logger');
const helper = require('./helper');

class GlissandoClient {
	constructor() {
		this.id = helper.generateRandomName(6);
		this.socket = null;
		this.socketId = '';
		this.isConnected = false;
		logger.log(`client ${this.id} created`);
	}

	onConnect(socket) {
		this.socket = socket;
		this.socketId = socket.id;
		this.isConnected = true;
		logger.log(`client ${this.id} connected to socket ${this.socketId}`);
	}

	onDisconnect() {
		this.isConnected = false;
		logger.log(`client ${this.id} disconnected from socket ${this.socketId}`);
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
