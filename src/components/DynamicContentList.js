import React, { Component } from "react";
import "./CreateDocument.scss";

class DynamicContentList extends Component {
  constructor(props) {
    super(props);
    this.handleInputs = this.handleInputs.bind(this);
    this.setIds = this.setIds.bind(this);
  }
  setIds(parent, type) {
    var childs = parent.childNodes;
    var i = 0;
    for (i = 1; i < childs.length; i++) {
      if (type == "list") {
        childs[i].childNodes[1].setAttribute(
          "id",
          this.props.order + " " + type + " item " + i
        );
        childs[i].firstElementChild.innerHTML = i + ".";
      } else {
        childs[i].firstElementChild.setAttribute("id", type + " " + i);
      }
    }
  }
  handleInputs(inputType, order, event) {
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "totalWidth");

    var container = document.createElement("div");
    container.setAttribute("class", "rowContainer lessMargin");

    var parent = document.getElementById(order + "listContainer");

    var closeImg = document.createElement("img");
    closeImg.setAttribute("src", "/icon/close.svg");
    closeImg.addEventListener("click", deleteInput.bind(this));

    if (inputType == "list") {
      var label = document.createElement("label");
      label.setAttribute("class", "numberlist");
      container.appendChild(label);
    }

    inputElement.addEventListener("keypress",(e)=>{if(e.key == "Enter"){
      this.handleInputs(inputType,order,e)
    }})
    container.appendChild(inputElement)
    container.appendChild(closeImg)
    parent.appendChild(container);
    inputElement.focus();
    this.setIds(parent, inputType);

    function deleteInput(event) {
      parent.removeChild(event.currentTarget.parentNode);
      this.setIds(parent, inputType);
    }
  }
  render() {
    return (
      <div className="blockContainer dynamicContentList">
        <div className="subtitleContainer">
          <h2 className="subtitle">#{this.props.order} List</h2>
          <img
            alt="close button"
            src="/icon/close.svg"
            onClick={(e) => this.props.remove(this.props.order, e)}
          />
        </div>
        <div className="colContainer" id={this.props.order + "listContainer"}>
          <div
            className="rowContainer lessMargin lastItem"
            onClick={(e) => this.handleInputs("list", this.props.order, e)}
          >
            <div className="addNewItem totalWidth">
              <img src="/icon/plus.svg" className="plusImage" />
              <span>ADD NEW LIST ITEM</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DynamicContentList;
