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
      newDoc: {
        content: []
      }

    };
    this.handleBlocks = this.handleBlocks.bind(this);
    this.handleDocType = this.handleDocType.bind(this);
    this.newDocData = this.newDocData.bind(this);
    this.dynamicContent = this.dynamicContent.bind(this);
  }
  handleBlocks(docType) {
    this.setState({ displayBlocks: docType });
  }
  handleDocType(event) {
    this.setState({ selectedDocType: event.target.name });
  }

  newDocData(newDocInfo){


    if(this.state.selectedDocType == "article"){

      var newArticle = {
        title: newDocInfo.title,
        type: newDocInfo.type,
        summary: newDocInfo.summary,
        technologies: newDocInfo.technologies,
        tags: newDocInfo.tags,
        content: this.state.newDoc.content
      }

      this.setState({newDoc: newArticle})

    }else{

      var newtech = {
        title: newDocInfo.title,
        type: newDocInfo.type,
        summary: newDocInfo.summary,
        tags: newDocInfo.tags,
        parent: newDocInfo.parent,
        content:  this.state.newDoc.content
      }

      this.setState({newDoc: newtech})

    }

  }

  dynamicContent(content){

    var newDoc = this.state.newDoc

    newDoc.content = content

    this.setState({newDoc: newDoc})

  }

  render() {

    console.log(this.state.newDoc);

    return (
  
      <form className="form">
          
        <div className="hideToolbar">
          <div className="mainContainer1">
            <h1 className="title">CREATE A DOCUMENT</h1>
            <div className="blockContainer">
              <div className="subtitleContainer">
                <h2 className="subtitle">Document Type</h2>
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
                  <label className="label" htmlFor="isArticle">
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
                  <label className="label" htmlFor="isTech">
                    Technology
                  </label>
                </div>
              </div>
            </div>
            {this.state.displayBlocks == "article" ? (
              <ArticleRequirements newDocData={this.newDocData} />
              ) : this.state.displayBlocks == "tech" ? (
                <TechRequirements newDocData={this.newDocData} />
                ) : null}
          </div>
        </div>
        {this.state.displayBlocks!=""?(
          <DynamicContent dynamicContent={this.dynamicContent}  />
        ):null}
       
      </form>
   
    );
  }
}

export default CreateDocument;
