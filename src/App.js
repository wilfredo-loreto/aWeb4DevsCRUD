import React from "react";
import "./App.scss";
import Header from "./components/Header";
import ArticlesList from "./components/ArticlesList";
import FrontendList from "./components/FrontendList";
import BackendList from "./components/BackendList";
import CreateDocument from "./components/CreateDocument";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";

const EditComponent = withRouter((props) => <CreateDocument {...props} />);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <Switch>
          {/* window.onbeforeunload = function askBeforeLeaving()
    {
        return "¿You sure want to leave?";
    }
  */}

          <Route path="/" exact>
            <img src="/img/AWeb4Devs.png" className="imageInicio" alt="" />
          </Route>

          <Route path="/articles">
            <ArticlesList title="Articles" link="articles" />
          </Route>

          <Route path="/frontend">
            <FrontendList title="Front-end Techs" />
          </Route>

          <Route path="/backend">
            <BackendList title="Back-end Techs" />
          </Route>

          <Route path="/create">
            <CreateDocument />
          </Route>

          <Route path="/edit/:type/:title">
            <EditComponent isEdit={true} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
