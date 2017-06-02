import React, { Component } from 'react';
import './App.css';
import Home from './Home.js'
import Cards from './Cards.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
<Router>
      <div>
    <nav>
      <Link to="/">Go to Home Page</Link>{' '}
      <Link to="/cards">Get cards</Link>
    </nav>
      <Route exact path="/" component={Home} />
      <Route path="/cards" component={Cards} />
    </div>
</Router>
    );
  }
}

export default App;
