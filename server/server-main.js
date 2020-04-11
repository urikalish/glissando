const express = require('express');
const socketIo = require('socket.io');
const logger = require('./logger');
const clientFactory = require('./client-factory');

const PUBLIC_DIR = 'public';
const DEFAULT_PORT = 5000;
const port = process.env.PORT || DEFAULT_PORT;

let expressServer;

const onGetRequest = (req, res) => {
	res.send('Hi from the server');
};

const startServer = () => {
	logger.log('start server');
	const expressApp = express();
	expressApp.use(express.static(PUBLIC_DIR));
	expressApp.get('/', onGetRequest);
	expressServer = expressApp.listen(port, () =>
		logger.log(`listening on port ${port}`),
	);
};

const handleClients = () => {
	const glissandoClients = {};
	const io = socketIo(expressServer);
	io.on('connection', (socket) => {
		const glissandoClient = clientFactory.createClient();
		glissandoClients[socket.id] = glissandoClient;
		glissandoClient.onConnect(socket);

		socket.on('disconnect', () => {
			glissandoClient.onDisconnect();
			delete glissandoClients[socket.id];
		});

		socket.on('c2s-add-one', (data) => {
			glissandoClient.onMsgAddOne(data);
		});
	});
};

exports.go = () => {
	startServer();
	handleClients();
};
