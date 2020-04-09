import socketIOClient from "socket.io-client";

export class Backend {
	private socket: any = null;

	// constructor() {
	// }

	init() {
		this.socket = socketIOClient('');
	}

	addOne(curVal: number, cb: (newVal: number) => void) {
		this.socket.on('s2c-add-one', (data: {val: number}) => {
			cb(data.val);
		});
		this.socket.emit('c2s-add-one', {val: curVal});
	};
}

export const backend = new Backend();
