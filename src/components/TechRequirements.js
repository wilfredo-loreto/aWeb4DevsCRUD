import React, { Component } from "react";
import "./CreateDocument.scss";

class CreateDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTechType: "",
      
      newDocInfo: {
        title: "",
        type: "",
        summary: "",
        tags: [],
        parent: "",
        dinamicContent: [],
        
      },
    };
    this.handleTechType = this.handleTechType.bind(this);
    this.handleTitle = this.handleTitle.bind(this)
    this.handleSummary = this.handleSummary.bind(this)
    this.handleTags = this.handleTags.bind(this)
     this.handleParent = this.handleParent.bind(this)
  }
  handleTechType(event){
        

    var docInfo = this.state.newDocInfo

    docInfo.type = event.target.name

    this.setState({selectedTechType:event.target.name, newDocInfo: docInfo })


  }

  
  handleTitle(event){
    var docInfo = this.state.newDocInfo

    docInfo.title = event.target.value

    this.setState({newDocInfo: docInfo})
  }
  
  handleSummary(event){
    var docInfo = this.state.newDocInfo

    docInfo.summary = event.target.value

    this.setState({newDocInfo: docInfo})
  }

  handleTags(event){
    var docInfo = this.state.newDocInfo

    docInfo.tags[event.target.id] = event.target.value

    this.setState({newDocInfo: docInfo})
  }

  handleParent(event){
    var docInfo = this.state.newDocInfo

    docInfo.parent = event.target.value

    this.setState({newDocInfo: docInfo})
  }


  render() {
       
    console.log(this.state.newDocInfo)
    
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
              <input type="text" onChange={this.handleTitle} className="lessWidth" />
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
              <input type="text" onChange={this.handleSummary} className="totalWidth" />
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
              <input type="text"  id={0} onChange={this.handleTags} className="lessWidth" />
            </div>
            <div className="rowContainer lessMargin">
              <input type="text"  id={1} onChange={this.handleTags} className="lessWidth" />
            </div>
            <div className="rowContainer lessMargin">
              <input type="text"  id={2} onChange={this.handleTags} className="lessWidth" />
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
              <input type="text" onChange={this.handleParent} className="totalWidth" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateDocument;
