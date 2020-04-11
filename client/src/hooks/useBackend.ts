import socketIOClient from 'socket.io-client';
import {useEffect, useState} from 'react';

export const useBackend = () => {
	const [connection, setConnection] = useState<SocketIOClient.Socket>();
	const [backendCounter, setBackendCounter] = useState<number>(0);

	const incBackendCounter = (curVal: number) => {
		connection && connection.emit('c2s-add-one', {val: curVal});
	};

	useEffect(() => {
		const socket = socketIOClient(window.location.host);

		socket.on('connect', () => {
			socket.on('s2c-add-one', (data: {val: number}) => {
				setBackendCounter(data.val);
			});
		});

		setConnection(socket);

		return () => {
			socket.emit('disconnect');
			socket.close();
		};
	}, []);

	return {backendCounter, incBackendCounter};
};
