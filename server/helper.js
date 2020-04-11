exports.generateRandomId = () => {
	return Math.round(Math.random() * (999999 - 100000) + 100000);
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
