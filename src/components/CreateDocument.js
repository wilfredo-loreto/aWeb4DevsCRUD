import React, { Component } from "react";
import ArticleRequirements from "./ArticleRequirements";
import TechRequirements from "./TechRequirements";
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
        <div className="mainContainer2">
          <h1 className="title">CONTENT</h1>
          <div className="blockContainer dynamicContentSubtitle">
            <div className="subtitleContainer">
              <h2 className="subtitle">Subtitle</h2>
              <img src="/icon/close.svg" />
            </div>
            <div className="colContainer">
              <div className="rowContainer">
                <input type="text" className="totalWidth" />
              </div>
            </div>
          </div>
          <div className="blockContainer dynamicContentText">
            <div className="subtitleContainer">
              <h2 className="subtitle">Text</h2>
              <img src="/icon/close.svg" />
            </div>
            <div className="colContainer">
              <div className="rowContainer">
                <textarea className="totalWidth textarea" />
              </div>
            </div>
          </div>
          <div className="blockContainer dynamicContentImage">
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
        <div className="blockContainer dynamicContentList">
          <div className="subtitleContainer">
            <h2 className="subtitle">List</h2>
            <img src="/icon/close.svg" />
          </div>
          <div className="colContainer">
            <div className="rowContainer lessMargin">
              <label className="numberlist">1.</label>
              <input type="text" className="totalWidth" />
            </div>
            <div className="rowContainer lessMargin">
              <label className="numberlist">2.</label>
              <input type="text" className="totalWidth" />
            </div>
            <div className="rowContainer lessMargin">
              <label className="numberlist">11.</label>
              <input type="text" className="totalWidth" />
            </div>
            <div className="rowContainer lessMargin">
              <div className="addNewItem totalWidth">
                <img src="/icon/plus.svg" className="plusImage" />
                <span>ADD NEW LIST ITEM</span>
              </div>
            </div>
          </div>
        </div>
        <div className="blockContainer dynamicContentReferences">
          <div className="subtitleContainer">
            <h2 className="subtitle">References</h2>
            <img src="/icon/close.svg" />
          </div>
          <div className="colContainer">
            <div className="rowContainer lessMargin">
              <label className="numberlist">1.</label>
              <span className="referenceText">Author: </span>
              <input type="text" className="totalWidth" />
              <span className="referenceText">Link: </span>
              <input type="text" className="lessWidth" />
            </div>
            <div className="rowContainer lessMargin">
              <label className="numberlist">2.</label>
              <span className="referenceText">Author: </span>
              <input type="text" className="totalWidth" />
              <span className="referenceText">Link: </span>
              <input type="text" className="lessWidth" />
            </div>
            <div className="rowContainer lessMargin">
              <label className="numberlist">3.</label>
              <span className="referenceText">Author: </span>
              <input type="text" className="totalWidth" />
              <span className="referenceText">Link: </span>
              <input type="text" className="lessWidth" />
            </div>
            
            <div className="rowContainer lessMargin">
              <div className="addNewItem totalWidth">
                <img src="/icon/plus.svg" className="plusImage" />
                <span>ADD NEW LIST ITEM</span>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="toolsContainer">
          <div className="toolBlock subtitleTool">
            <img src="/icon/subtitle_tool.svg" className="tool" />
          </div>
          <div className="toolBlock textTool">
            <img src="/icon/text_tool.svg" className="tool" />
          </div>
          <div className="toolBlock imageTool">
            <img src="/icon/image_tool.svg" className="tool" />
          </div>
          <div className="toolBlock listTool">
            <img src="/icon/list_tool.svg" className="tool" />
          </div>
          <div className="toolBlock referenceTool">
            <img src="/icon/reference_tool.svg" className="tool" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateDocument;
