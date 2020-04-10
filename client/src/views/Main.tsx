import React, {useEffect, useState} from 'react';
import Button from "@material-ui/core/Button";
import PlusOne from "@material-ui/icons/PlusOne";
import {useBackend} from "../hooks/useBackend";

export function Main() {

	const [counter, setCounter] = useState<number>(0);
	const {backendCounter, incBackendCounter} = useBackend();

	const goInc = async () => {
		incBackendCounter(counter);
	};

	useEffect(() => {
		setCounter(backendCounter);
	}, [backendCounter]);

	return (
		<div className="App">
			<div>{counter}</div>
			<PlusOne/>
			<Button onClick={goInc} variant="contained" color="primary">Inc</Button>
		</div>
	);
}
