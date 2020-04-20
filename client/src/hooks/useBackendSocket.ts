import socketIOClient from 'socket.io-client';
import {useEffect, useState} from 'react';
import {createContainer} from 'unstated-next';

export const useBackendSocket = () => {
	const [isConnected, setIsConnected] = useState(false);
	const [socket, setSocket] = useState<SocketIOClient.Socket | null>(null);

	const connect = () => {
		if (!isConnected) {
			const socket = socketIOClient(window.location.host);
			socket.on('connect', () => {
				setSocket(socket);
				setIsConnected(true);
				// socket.on('s2c-add-one', (data: {val: number}) => {
				// 	setBackendCounter(data.val);
				// });
			});
		}
	};

	const disconnect = () => {
		if (isConnected && socket) {
			socket.emit('disconnect');
			socket.close();
			setIsConnected(false);
			setSocket(null);
		}
	};

	const createShow = () => {
		if (isConnected && socket) {
			socket.emit('c2s-create-show', {});
		}
	};

	useEffect(() => {
		connect();
		return () => {
			disconnect();
		};
	}, []);

	return {isConnected, createShow};
};

export const BackendSocketContainer = createContainer(useBackendSocket);
