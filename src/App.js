import './App.css';
import Home from './components/Home/Home'
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import About from './components/About/About';
import AllServices from './components/AllServices/AllServices';
import NotFound from './components/NotFound/NotFound';
import Support from './components/Support/Support';
import Footer from './components/Footer/Footer';

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

        <Footer></Footer>


      </Router>

    </div>
  );
}

export default App;
