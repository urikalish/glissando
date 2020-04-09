import React, {useEffect, useState} from 'react';
import './App.css';
import {backend} from "./backend/backend";

function App() {

	useEffect(() => {
		backend.init();
	}, []);

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

export default App;
