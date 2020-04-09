import React, {useState} from 'react';
import {backend} from "../services/backend";

export function Main() {

	const [counter, setCounter] = useState<number>(0);

	const goInc = async () => {
		const newVal = await backend.addOne(counter);
		setCounter(newVal);
	};

	return (
		<div className="App">
			<div>{counter}</div>
			<button onClick={goInc}>Inc</button>
		</div>
	);
}
