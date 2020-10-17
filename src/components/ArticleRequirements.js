import React, { Component } from "react";
import "./CreateDocument.scss";

class ArticleRequirements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTechType: "",
    };
    this.handleTechType = this.handleTechType.bind(this);
    this.handleInputs = this.handleInputs.bind(this);
  }
  handleTechType(event) {
    this.setState({ selectedTechType: event.target.name });
  }
  setIds(parent,type) {
    var childs = parent.childNodes;
    var i = 0;
    for (i = 1; i < childs.length; i++) {
      childs[i].firstElementChild.setAttribute("id", type+ " " + i);
      console.log("im in for");
    }
  }
  handleInputs(inputType,event){
    var inputElement = document.createElement("input")
    
    var container = document.createElement("div")
    var parent = document.getElementById(inputType +"Container")
    var closeImg = document.createElement("img")
    inputElement.setAttribute("type","text")
    inputElement.setAttribute("class","lessWidth")
    container.setAttribute("class","rowContainer lessMargin")
    
    closeImg.setAttribute("src","/icon/close.svg")
    closeImg.addEventListener("click",deleteInput.bind(this))
    inputElement.addEventListener("keypress",(e)=>{if(e.key == "Enter"){
      this.handleInputs(inputType,e)
    }})
    container.appendChild(inputElement)
    container.appendChild(closeImg)
    parent.appendChild(container)
    this.setIds(parent,inputType)
    inputElement.focus() 
    function deleteInput(event){
      parent.removeChild(event.currentTarget.parentNode)
      this.setIds(parent,inputType)
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
            <div className="rowContainer lessMargin lastItem" onClick={(e)=>this.handleInputs("technology",e)}>
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
            <div className="rowContainer lessMargin lastItem" onClick={(e)=>this.handleInputs("tag",e)}>
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
