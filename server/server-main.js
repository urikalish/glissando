const express = require('express');
const socketIo = require('socket.io');
const logger = require('./logger');
const clientFactory = require('./client-factory');

const PUBLIC_DIR = 'public';
const DEFAULT_PORT = 5000;
const port = process.env.PORT || DEFAULT_PORT;

const onGetRequest = (req, res) => {
	res.send('Hi from the server');
};

const handleClients = io => {
	const glissandoClients = {};
	io.on('connection', socket => {
		logger.log(`socket ${socket.id} connected`);
		const glissandoClient = clientFactory.createClient();
		glissandoClients[socket.id] = glissandoClient;
		glissandoClient.onConnect(socket);

		socket.on('disconnect', () => {
			logger.log(`socket ${socket.id} disconnected`);
			glissandoClient.onDisconnect();
			delete glissandoClients[socket.id];
		});

		socket.on('c2s-add-one', data => {
			glissandoClient.onMsgAddOne(data);
		});
	});
};

exports.startServer = () => {
	logger.log('start server');
	const expressApp = express();
	expressApp.use(express.static(PUBLIC_DIR));
	expressApp.get('/', onGetRequest);
	const expressServer = expressApp.listen(port, () => {
		logger.log(`listening on port ${port}`);
	});
	const io = socketIo(expressServer);
	handleClients(io);
};
