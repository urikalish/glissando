export interface AddOneResult {
	data: number;
}

export class Backend {
	constructor() {
	}

	static async addOne(number: number): Promise<AddOneResult> {
		const response = await fetch(`/express_backend?number=${number}`);
		const body = await response.json();
		if (response.status !== 200) {
			throw Error(body.message)
		}
		return {
			data: parseInt(body.msg, 10)
		}
	};
}
