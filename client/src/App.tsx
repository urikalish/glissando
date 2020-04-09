import React, {useEffect, useState} from 'react';
import './App.css';
import {backend} from "./backend/backend";

function App() {

	useEffect(() => {
		backend.init();
	}, []);

	//const [userName, setUserName] = useState<string>('kalish');
	const [counter, setCounter] = useState<number>(0);

	const goInc = () => {
		backend.addOne(counter, (newVal: number) => {
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
