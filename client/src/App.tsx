import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import {Home} from './views/Home';
import {Create} from './views/Create';
import {Join} from './views/Join';
import {Run} from './views/Run';

function App() {
    return (
    <Router>
	    <div className="App">
		    <h1>Pixel Glissando</h1>
		    <hr />
		    <Switch>
			    <Route path="/" exact component={Home} />
			    <Route path="/home" exact component={Home} />
			    <Route path="/create" exact component={Create} />
			    <Route path="/join" exact component={Join} />
			    <Route path="/run" exact component={Run} />
			    <Route component={Home} />
		    </Switch>
	    </div>
    </Router>
    )
}

export default App;
