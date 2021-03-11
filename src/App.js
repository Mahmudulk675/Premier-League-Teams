
import './App.css';
import Home from './Components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import TeamDetail from './Components/TeamDetail/TeamDetail';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <Router>
      <div>
        {/* <nav>
          <ul className="nav navBar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/team/:id">
            <TeamDetail></TeamDetail>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
