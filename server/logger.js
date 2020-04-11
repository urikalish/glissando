exports.log = msg => {
	console.log(`[DBG] ${msg}`);
};
exports.warn = msg => {
	console.warn(`[WRN] ${msg}`);
};
exports.error = msg => {
	console.error(`[ERR] ${msg}`);
};
