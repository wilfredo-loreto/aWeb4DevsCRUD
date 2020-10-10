import React, { Component } from "react";
import ArticleRequirements from "./ArticleRequirements";
import TechRequirements from "./TechRequirements";
import DynamicContent from "./DynamicContent"
import "./CreateDocument.scss";

class CreateDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBlocks: "",
      selectedDocType: "",
    };
    this.handleBlocks = this.handleBlocks.bind(this);
    this.handleDocType = this.handleDocType.bind(this);
  }
  handleBlocks(docType) {
    this.setState({ displayBlocks: docType });
  }
  handleDocType(event) {
    this.setState({ selectedDocType: event.target.name });
  }

  render() {
    return (
      <React.Fragment>
        <form className="form">
          
        <div className="hideToolbar">
          <div className="mainContainer1">
            <h1 className="title">CREATE A DOCUMENT</h1>
            <div className="blockContainer">
              <div className="subtitleContainer">
                <h2 className="subtitle">Document Type</h2>
                <img src="/icon/close.svg" />
              </div>
              <div className="colContainer">
                <div className="rowContainer">
                  <input
                    checked={this.state.selectedDocType == "article"}
                    name="article"
                    onChange={this.handleDocType}
                    onClick={() => this.handleBlocks("article")}
                    type="radio"
                    />
                  <label className="label" for="isArticle">
                    Article
                  </label>
                </div>
                <div className="rowContainer">
                  <input
                    checked={this.state.selectedDocType == "tech"}
                    name="tech"
                    onChange={this.handleDocType}
                    onClick={() => this.handleBlocks("tech")}
                    type="radio"
                    />
                  <label className="label" for="isTech">
                    Technology
                  </label>
                </div>
              </div>
            </div>
            {this.state.displayBlocks == "article" ? (
              <ArticleRequirements />
              ) : this.state.displayBlocks == "tech" ? (
                <TechRequirements />
                ) : null}
          </div>
        </div>
        {this.state.displayBlocks!=""?(
          <DynamicContent/>
        ):null}
       
      </form>
      </React.Fragment>
    );
  }
}

export default CreateDocument;
