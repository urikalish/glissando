import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import PlusOne from '@material-ui/icons/PlusOne';
import { useBackend } from '../hooks/useBackend';
import { Link } from 'react-router-dom';

export function Home() {
	const [counter, setCounter] = useState<number>(0);
	const { backendCounter, incBackendCounter } = useBackend();

	const goInc = async () => {
		incBackendCounter(counter);
	};

	useEffect(() => {
		setCounter(backendCounter);
	}, [backendCounter]);

	return (
		<>
			<div>Home</div>
			<div>{counter}</div>
			<PlusOne />
			<Button onClick={goInc} variant="contained" color="primary">
				Inc
			</Button>
			<ul>
				<li>
					<Link to="/create">Create</Link>
				</li>
				<li>
					<Link to="/join">Join</Link>
				</li>
				<li>
					<Link to="/run">Run</Link>
				</li>
			</ul>
		</>
	);
}
