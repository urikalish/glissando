import React, {useState} from 'react';
import {backend} from "../services/backend";
import Button from "@material-ui/core/Button";
import PlusOne from "@material-ui/icons/PlusOne";

export function Main() {

	const [counter, setCounter] = useState<number>(0);

	const goInc = async () => {
		const newVal = await backend.addOne(counter);
		setCounter(newVal);
	};

	return (
		<div className="App">
			<div>{counter}</div>
			<PlusOne/>
			<Button onClick={goInc} variant="contained" color="primary">Inc</Button>
		</div>
	);
}
