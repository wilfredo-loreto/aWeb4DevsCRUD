import React, { Component } from "react";
import "./Header.scss";
import { BrowserRouter, Link, NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <img src="/img/AWeb4Devs.png" className="image" alt="" />

        <div className="nav">
          <div className="itemNav">
            <NavLink activeClassName="active" to="/articles">
              <h3>Articles</h3>
              <div className="activeBar"></div>
            </NavLink>
          </div>
          <div className="itemNav">
            <NavLink activeClassName="active" to="/frontend">
              <h3>Front-end</h3>
              <div className="activeBar"></div>
            </NavLink>
          </div>
          <div className="itemNav">
            <NavLink activeClassName="active" to="/backend">
              <h3>Back-end</h3>
              <div className="activeBar"></div>
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}
