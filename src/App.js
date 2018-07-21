import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './img/LOAF.png';
import './App.css';
import Home from './components/Homepage/Home';
import LosAngeles from './components/CityPage/LosAngeles';
import NewYork from './components/CityPage/NewYork';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/LA" component={LosAngeles} />
            <Route path="/NY" component={NewYork} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
