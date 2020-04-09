import React, {useEffect} from 'react';
import './App.css';
import {backend} from "./services/backend";
import {Main} from "./views/Main";

function App() {

	useEffect(() => {
		backend.init();
	}, []);

    return (
        <Main/>
    )
}

export default App;
