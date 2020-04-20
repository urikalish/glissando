exports.generateRandomId = length => {
	const min = Math.pow(10, length - 1);
	const max = Math.pow(10, length) - 1;
	return Math.round(Math.random() * (max - min) + min);
};

exports.generateRandomName = length => {
	let result = '';
	const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
	const charLength = chars.length;
	for (let i = 0; i < length; i++) {
		result += chars.charAt(Math.floor(Math.random() * charLength));
	}
	return result;
};
