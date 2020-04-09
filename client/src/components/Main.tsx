import React, {useState} from 'react';
import {backend} from "../services/backend";

export function Main() {

	const [counter, setCounter] = useState<number>(0);

	const goInc = () => {
		backend.addOne(counter, newVal => {
			setCounter(newVal);
		});
	};

	return (
		<div className="App">
			<div>{counter}</div>
			<button onClick={goInc}>Inc</button>
		</div>
	);
}
