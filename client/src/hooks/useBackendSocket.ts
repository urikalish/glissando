import socketIOClient from 'socket.io-client';
import {useEffect, useState} from 'react';
import {createContainer} from 'unstated-next';

export const useBackendSocket = () => {
	const [connection, setConnection] = useState<SocketIOClient.Socket | null>(null);

	const isConnected = () => {
		return !!connection;
	};

	const createShow = () => {
		if (connection) {
			connection.emit('c2s-create-show', {});
		}
	};

	useEffect(() => {
		if (!connection) {
			const socket = socketIOClient(window.location.host);
			socket.on('connect', () => {
				setConnection(socket);
				// socket.on('s2c-add-one', (data: {val: number}) => {
				// 	setBackendCounter(data.val);
				// });
			});
		}
		return () => {
			if (connection) {
				connection.emit('disconnect');
				connection.close();
			}
		};
	}, [connection]);

	return {isConnected, createShow};
};

export const BackendSocketContainer = createContainer(useBackendSocket);
