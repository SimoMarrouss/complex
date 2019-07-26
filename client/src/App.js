import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Fib from './Fib';
import OtherPage from './OtherPage';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
       <Link to="/">Home</Link>
       <Link to="/otherpage">Other Page</Link>
        
      </header>
      <div>
        <Route exact path="/" component={Fib}></Route>
        <Route path="/otherpage" component={OtherPage}></Route>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
