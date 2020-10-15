import React, { Component } from "react";
import "./CreateDocument.scss";

class ArticleRequirements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTechType: "",
    };
    this.handleTechType = this.handleTechType.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.handleTechnologies = this.handleTechnologies.bind(this)
  }
  handleTechnologies(event) {
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "lessWidth");

    var container = document.createElement("div");
    container.setAttribute("class", "rowContainer lessMargin");

    var parent = document.getElementById("technologyContainer");

    var closeImg = document.createElement("img");
    closeImg.setAttribute("src", "/icon/close.svg");
    closeImg.addEventListener("click", deleteTech.bind(this));

    container.appendChild(inputElement);
    container.appendChild(closeImg);
    parent.appendChild(container);
    this.setIds(parent,"technology");

    function deleteTech(event) {
      parent.removeChild(event.currentTarget.parentNode);
      this.setIds(parent,"technology");
    }
  }
  handleTechType(event) {
    this.setState({ selectedTechType: event.target.name });
  }
  setIds(parent,type) {
    var childs = parent.childNodes;
    var i = 0;
    for (i = 0; i < childs.length; i++) {
      childs[i].firstElementChild.setAttribute("id", type+ " " + i);
      console.log("im in for");
    }
  }
  handleTags(event) {
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "lessWidth");

    var container = document.createElement("div");
    container.setAttribute("class", "rowContainer lessMargin");

    var parent = document.getElementById("tagContainer");

    var closeImg = document.createElement("img");
    closeImg.setAttribute("src", "/icon/close.svg");
    closeImg.addEventListener("click", deleteTag.bind(this));

    container.appendChild(inputElement);
    container.appendChild(closeImg);
    parent.appendChild(container);
    this.setIds(parent,"tag");

    function deleteTag(event) {
      event.preventDefault();
      var parent = document.getElementById("tagContainer");
      parent.removeChild(event.currentTarget.parentNode);
      this.setIds(parent,"tag");
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Technology Type</h2>
          </div>
          <div className="colContainer">
            <div className="rowContainer">
              <input
                checked={this.state.selectedTechType == "Frontend"}
                name="Frontend"
                onChange={this.handleTechType}
                type="radio"
              />

              <label className="label" for="isArticle">
                Frontend
              </label>
            </div>
            <div className="rowContainer">
              <input
                checked={this.state.selectedTechType == "Backend"}
                name="Backend"
                onChange={this.handleTechType}
                type="radio"
              />

              <label className="label" for="isArticle">
                Backend
              </label>
            </div>
            <div className="rowContainer">
              <input
                checked={this.state.selectedTechType == "Mixed"}
                name="Mixed"
                onChange={this.handleTechType}
                type="radio"
              />

              <label className="label" for="isArticle">
                Mixed
              </label>
            </div>
            <div className="rowContainer">
              <input
                checked={this.state.selectedTechType == "None"}
                name="None"
                onChange={this.handleTechType}
                type="radio"
              />

              <label className="label" for="isArticle">
                None
              </label>
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Title</h2>
          </div>
          <div className="colContainer">
            <div className="rowContainer">
              <input type="text" className="lessWidth" />
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Summary</h2>
          </div>
          <div className="colContainer">
            <div className="rowContainer">
              <input type="text" className="totalWidth" />
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Technologies</h2>
          </div>
          <div className="colContainer" id="technologyContainer">
            <div className="rowContainer lessMargin lastItem" onClick={this.handleTechnologies}>
              <div className="addNewItem">
                <img src="/icon/plus.svg" className="plusImage" />
                <span>ADD NEW TECHNOLOGY</span>
              </div>
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Tags</h2>
          </div>
          <div className="colContainer" id="tagContainer">
            <div className="rowContainer lessMargin lastItem" onClick={this.handleTags}>
              <div className="addNewItem">
                <img src="/icon/plus.svg" className="plusImage" />
                <span>ADD NEW TAG</span>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ArticleRequirements;
