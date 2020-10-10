import React from 'react';
import './App.scss';
import CreateDocument from './components/CreateDocument'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">

        <h1>Aweb4devs CRUD</h1>

        <Switch>

          <Route path="/" exact>

            <h1>1</h1>

          </Route>

          <Route path="/articles">

          <h1>2</h1>

          </Route>

          <Route path="/frontend">

          <h1>2</h1>

          </Route>

          <Route path="/backend">

          <h1>3</h1>

          </Route>

          <Route path="/create">

          <CreateDocument />

          </Route>

          <Route path="/edit">

          <h1>5</h1>

          </Route>

        </Switch>




      </div>
    </Router>
  );
}

export default App;
