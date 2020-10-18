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
        logo: "",
        img: "",
        summary: "",
        tags: [],
        parent: ""
        
      },
    };
    this.handleTechType = this.handleTechType.bind(this);
    this.handleTitle = this.handleTitle.bind(this)
    this.handleSummary = this.handleSummary.bind(this)
    this.handleParent = this.handleParent.bind(this)
    this.handleImg = this.handleImg.bind(this)
    this.handleLogo = this.handleLogo.bind(this)
  }
  handleTechType(event){
    
    var docInfo = this.state.newDocInfo

    docInfo.type = event.target.name

    this.setState({selectedTechType:event.target.name, newDocInfo: docInfo })

    this.props.newDocData(this.state.newDocInfo);

  }

  handleImg(event){
    var docInfo = this.state.newDocInfo

    docInfo.img = event.target.files[0].name

    this.setState({newDocInfo: docInfo})

    this.props.newDocData(this.state.newDocInfo);
  }

  
  handleLogo(event){
    var docInfo = this.state.newDocInfo

    docInfo.logo = event.target.files[0].name

    this.setState({newDocInfo: docInfo})

    this.props.newDocData(this.state.newDocInfo);
  }

  handleTitle(event){
    var docInfo = this.state.newDocInfo

    docInfo.title = event.target.value

    this.setState({newDocInfo: docInfo})

    this.props.newDocData(this.state.newDocInfo);
  }
  
  handleSummary(event){
    var docInfo = this.state.newDocInfo

    docInfo.summary = event.target.value

    this.setState({newDocInfo: docInfo})

    this.props.newDocData(this.state.newDocInfo);
  }

  handleParent(event){
    var docInfo = this.state.newDocInfo

    docInfo.parent = event.target.value

    this.setState({newDocInfo: docInfo})

    this.props.newDocData(this.state.newDocInfo);
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
    inputElement.addEventListener("keypress",(e)=>{if(e.key == "Enter"){
      this.handleInputs(inputType,e)
    }})
    container.appendChild(inputElement)
    container.appendChild(closeImg)
    parent.appendChild(container)
    inputElement.focus()
    this.setIds(parent,inputType)

    inputElement.addEventListener("input", () => {
      var docInfo = this.state.newDocInfo
 
        docInfo.tags[inputElement.id.split(" ")[1] - 1] = inputElement.value

        this.setState({newDocInfo: docInfo})
    })


    function deleteInput(event){
      parent.removeChild(event.currentTarget.parentNode)
      this.setIds(parent,inputType)

      var docInfo = this.state.newDocInfo
     
      docInfo.tags.splice(inputElement.id.split(" ")[1] - 1,1)

        this.setState({newDocInfo: docInfo})
    
    }

    this.props.newDocData(this.state.newDocInfo);

  }
  
  render() {
       
    console.log(this.state.newDocInfo)
    
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
              <input type="text" onChange={this.handleTitle} className="lessWidth" />
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Summary</h2>
          
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
          
          </div>
          <div className="colContainer">
            <div className="rowContainer">
              <input
                type="file"
                onChange={this.handleImg}
                className="submitButton"
                accept="image/*"
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
                onChange={this.handleLogo}
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
              <input type="text" onChange={this.handleParent} className="totalWidth" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateDocument;
