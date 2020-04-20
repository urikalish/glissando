const express = require('express');
const socketIo = require('socket.io');
const logger = require('./logger');
const clientFactory = require('./client-factory');
const showFactory = require('./show-factory');

const PUBLIC_DIR = 'public';
const DEFAULT_PORT = 5000;
const port = process.env.PORT || DEFAULT_PORT;

const onGetRequest = (req, res) => {
	res.send('Hi from the server');
};

const glissandoClients = {};
const glissandoShows = {};

const handleClients = io => {
	io.on('connection', socket => {
		logger.log(`socket connected. id:${socket.id}`);
		const glissandoClient = clientFactory.createClient();
		glissandoClients[socket.id] = glissandoClient;
		glissandoClient.onConnect(socket);
		logger.log(`${Object.keys(glissandoClients).length} clients connected`);

		socket.on('disconnect', () => {
			logger.log(`socket disconnected. id:${socket.id}`);
			glissandoClient.onDisconnect();
			delete glissandoClients[socket.id];
			logger.log(`${Object.keys(glissandoClients).length} clients connected`);
		});

		socket.on('c2s-create-show', () => {
			logger.log(`create show`);
			const glissandoShow = showFactory.createShow();
			glissandoShows[glissandoShow.id] = glissandoShow;
		});
	});
};

exports.startServer = () => {
	logger.log('start server');
	const expressApp = express();
	expressApp.use(express.static(PUBLIC_DIR));
	expressApp.get('/', onGetRequest);
	const expressServer = expressApp.listen(port, () => {
		logger.log(`listening. port:${port}`);
	});
	const io = socketIo(expressServer);
	handleClients(io);
};
