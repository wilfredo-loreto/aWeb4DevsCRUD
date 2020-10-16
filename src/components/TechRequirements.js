import React, { Component } from "react";
import "./CreateDocument.scss";

class CreateDocument extends Component {
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
        setIds(parent,type){
          var childs = parent.childNodes
          var i=0
          for(i=1;i<childs.length;i++){
            childs[i].firstElementChild.setAttribute("id",type +" "+i)
            console.log("im in for");
          }
        }
  handleInputs(inputType,event){
    var inputElement = document.createElement("input")
    inputElement.setAttribute("type","text")
    inputElement.setAttribute("class","lessWidth")

    var container = document.createElement("div")
    container.setAttribute("class","rowContainer lessMargin")
   
    
    var parent = document.getElementById(inputType +"Container")
    
    var closeImg = document.createElement("img")
    closeImg.setAttribute("src","/icon/close.svg")
    closeImg.addEventListener("click",deleteInput.bind(this))
    
    container.appendChild(inputElement)
    container.appendChild(closeImg)
    parent.appendChild(container)
    this.setIds(parent,inputType)

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
            <h2 className="subtitle">Image</h2>
          
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
        <div className="blockContainer" >
          <div className="subtitleContainer">
            <h2 className="subtitle">Tags (Keywords for Search Bar)</h2>
          
          </div>
          <div className="colContainer"id="tagContainer">
            <div className="rowContainer lessMargin lastItem" onClick={(e)=>{this.handleInputs("tag",e)}}>
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
