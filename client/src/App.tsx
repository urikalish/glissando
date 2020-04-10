import React, {useEffect} from 'react';
import './App.css';
import {Main} from "./views/Main";

function App() {

	useEffect(() => {
		console.log('React app started');
	}, []);

    return (
        <Main/>
    )
}

export default App;
