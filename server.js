const express = require('express');
const socketIo = require('socket.io');
const PUBLIC_DIR = 'public';
//const clients = [];
const port = process.env.PORT || 5000;
const app = express();
app.use(express.static(PUBLIC_DIR));
app.get('/', (req, res) => {
	res.send('Hi from server');
});
app.get('/express_backend', (req, res) => {
	const number = parseInt(req.query['number'], 10);
	res.send({ msg: `${number + 1}`});
});
const server = app.listen(port, () => console.log(`Listening on port ${port}`));
const io = socketIo(server);
io.on('connection', (socket) => {
	console.log(`socket ${socket.id} connected`);

	socket.on('disconnect', () => {
		console.log(`socket ${socket.id} disconnected`);
	});

	socket.on('c2s-add-one', (data) => {
		socket.emit('s2c-add-one', {
			val: data.val + 1
		})
	})
});
