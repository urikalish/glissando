import React, {useState} from 'react';
import './App.css';
import {AddOneResult, Backend} from "./backend";

function App() {

  const [counter, setCounter] = useState<number>(0);

  const goInc = async () => {
  	const addOneRes: AddOneResult = await Backend.addOne(counter);
    setCounter(addOneRes.data);
  };

  return (
    <div className="App">
	    <div>{counter}</div>
	    <button onClick={goInc}>Inc</button>
    </div>
  );
}

export default App;
