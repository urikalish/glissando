import socketIOClient from "socket.io-client";

export class Backend {
	private socket: any = null;

	// constructor() {
	// }

	init() {
		this.socket = socketIOClient('');
	}

	async addOne(curVal: number): Promise<number> {
		return new Promise((resolve, reject) => {
			try {
				this.socket.on('s2c-add-one', (data: {val: number}) => {
					this.socket.off('s2c-add-one');
					resolve(data.val);
				});
				this.socket.emit('c2s-add-one', {val: curVal});
			} catch(err) {
				reject(err);
			}
		});
	};
}

export const backend = new Backend();
