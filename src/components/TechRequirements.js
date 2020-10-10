import React, { Component } from "react";
import "./CreateDocument.scss";

class CreateDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTechType: "",
    };
    this.handleTechType = this.handleTechType.bind(this);
  }
  handleTechType(event) {
    this.setState({ selectedTechType: event.target.name });
  }
  render() {
    return (
      <React.Fragment>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Technology Type</h2>
            <img src="/icon/close.svg" />
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
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Title</h2>
            <img src="/icon/close.svg" />
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
            <img src="/icon/close.svg" />
          </div>
          <div className="colContainer">
            <div className="rowContainer">
              <input type="text" className="totalWidth" />
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Image</h2>
            <img src="/icon/close.svg" />
          </div>
          <div className="colContainer">
            <div className="rowContainer">
              <input
                type="file"
                className="submitButton"
                accept="image/png, image/jpg"
              />
              <input
                type="text"
                placeholder="ALTERNATIVE TEXT (SEO) CONTEXT AND SUBJECT"
                className="lessWidth"
              />
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Logo</h2>
            <img src="/icon/close.svg" />
          </div>
          <div className="colContainer">
            <div className="rowContainer">
              <input
                type="file"
                className="submitButton"
                accept="image/png, image/jpg"
              />

              <input
                type="text"
                placeholder="ALTERNATIVE TEXT (SEO) CONTEXT AND SUBJECT"
                className="lessWidth"
              />
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Tags</h2>
            <img src="/icon/close.svg" />
          </div>
          <div className="colContainer">
            <div className="rowContainer lessMargin">
              <input type="text" className="lessWidth" />
            </div>
            <div className="rowContainer lessMargin">
              <input type="text" className="lessWidth" />
            </div>
            <div className="rowContainer lessMargin">
              <input type="text" className="lessWidth" />
            </div>
            <div className="rowContainer lessMargin">
              <div className="addNewItem ">
                <img src="/icon/plus.svg" className="plusImage" />
                <span>ADD NEW TAG</span>
              </div>
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">
              Parent (Empty if this is already a Parent)
            </h2>
            <img src="/icon/close.svg" />
          </div>
          <div className="colContainer">
            <div className="rowContainer">
              <input type="text" className="totalWidth" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateDocument;
