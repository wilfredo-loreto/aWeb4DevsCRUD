import React, { Component } from "react";
import "./ItemsList.scss";
import axios from "axios";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

export default class FrontendList extends Component {
  constructor(props) {
    super(props);

    this.state = { frontend: [], pageOfItems: [] };

    this.onChangePage = this.onChangePage.bind(this);
  }

  async componentDidMount() {
    try {
      const res = axios.get("http://aweb4devsapi.herokuapp.com/techs/frontend");
      const posts = (await res).data;

      this.setState({ frontend: posts.techs });
    } catch (error) {
      alert("error during http request: " + error);
    }
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  corfirmAlert(title, count) {
    if (window.confirm("Are you sure?")) {
      this.deleteArticle(title, count);
    }
  }

  async deleteArticle(title, count) {
    const res = axios.delete(
      "http://aweb4devsapi.herokuapp.com/delete-tech/" + title
    );
    const posts = (await res).data;

    if (posts.message === "deleted") {
      var newData = this.state.frontend;
      newData.splice(count, 1);

      this.setState({ pageOfItems: newData });
    }
  }

  render() {
    var data = this.state.frontend;
    return (
      <React.Fragment>
        <div className="mainContainer">
          <h2 className="title">{this.props.title}</h2>

          <Link to="/create" className="new">
            <h4>+</h4>
            <h3>Create a New Document</h3>
          </Link>

          <div className="searchBar">
            <input id="searchBar1" type="text" placeholder="Search..." />

            <img className="searchIcon" src="/icon/search.png" alt="" />
          </div>

          <div className="content">
            <table>
              <tr>
                <th className="thTitle">
                  <h2>Title</h2>
                </th>
                <th className="tableActions">
                  <h2>Actions</h2>
                </th>
              </tr>

              {this.state.pageOfItems.map((article, count) => (
                <tr key={count} className={count % 2 === 0 ? "tableRow" : ""}>
                  <td className="tableTitle">{article.title}</td>
                  <td className="tableActions">
                    <Link className="edit" to={"/edit/tech/" + article.title}>
                      <img src="/icon/edit.png" alt="edit icon" />
                      <h3>EDIT</h3>
                    </Link>

                    <div
                      onClick={() => this.corfirmAlert(article.title, count)}
                      className="delete"
                    >
                      <img src="/icon/delete.png" alt="delete icon" />
                      <h3>DELETE</h3>
                    </div>
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <Pagination items={data} onChangePage={this.onChangePage} />
        </div>
      </React.Fragment>
    );
  }
}
