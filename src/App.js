
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
import Error from './Components/Error/Error';

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      <Router>
      

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
          <Route path="*">
            <Error />
        </Route>
        </Switch>
       
    </Router>
    </div>
  );
}

export default App;
