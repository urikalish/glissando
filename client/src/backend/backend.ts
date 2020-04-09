import socketIOClient from "socket.io-client";

export class Backend {
	private socket: any;

	constructor() {
		this.socket = null;
	}

	init() {
		this.socket = socketIOClient('');
	}

	addOne(curVal: number, cb: any) {
		this.socket.on('s2c-add-one', (data: any) => {
			cb(data.val);
		});
		this.socket.emit('c2s-add-one', {val: curVal});
	};
}

export const backend = new Backend();
