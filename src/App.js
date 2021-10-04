import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import AllServices from './components/AllServices/AllServices';
import NotFound from './components/NotFound/NotFound';
import ConatctUs from './components/Support/Support';
import Support from './components/Support/Support';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/allservices">
            <AllServices></AllServices>
          </Route>
          <Route path="/support">
            <Support></Support>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>


      </Router>

    </div>
  );
}

export default App;
