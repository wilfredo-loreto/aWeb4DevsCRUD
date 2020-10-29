import React, { Component } from "react";
import "./CreateDocument.scss";

class DynamicContentReferences extends Component {
  constructor(props) {
    super(props);

    this.state = {
      refs: {
        type: "references",
        content: [],
      },
    };

    this.handleInputs = this.handleInputs.bind(this);
  }
  setIds(parent, type) {
    var childs = parent.childNodes;
    var i = 0;
    for (i = 1; i < childs.length; i++) {
      if (type == "list" || type == "reference") {
        childs[i].firstElementChild.innerHTML = i + ".";

        if (type == "list") {
          childs[i].childNodes[1].setAttribute(
            "id",
            this.props.order + " " + type + " item " + i
          );
        } else {
          childs[i].childNodes[2].setAttribute(
            "id",
            type + " " + i + " Author"
          );
          childs[i].childNodes[4].setAttribute("id", type + " " + i + " Link");
        }
      } else {
        childs[i].firstElementChild.setAttribute("id", type + " " + i);
      }
    }
  }

  handleInputs(inputType, order, event) {
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "lessWidth");

    var container = document.createElement("div");
    container.setAttribute("class", "rowContainer lessMargin");

    var parent = document.getElementById(order + inputType + "Container");

    var closeImg = document.createElement("img");
    closeImg.setAttribute("src", "/icon/close.svg");
    closeImg.addEventListener("click", deleteInput.bind(this));

    if (inputType == "list" || inputType == "reference") {
      var label = document.createElement("label");
      label.setAttribute("class", "numberlist");
      container.appendChild(label);
    }
    if (inputType == "reference") {
      var author = document.createElement("span");
      var link = document.createElement("span");
      var inputElement2 = document.createElement("input");
      author.innerHTML = "Author: ";
      link.innerHTML = "Link: ";
      author.setAttribute("class", "referenceText");
      link.setAttribute("class", "referenceText");
      inputElement2.setAttribute("class", "totalWidth");
      inputElement2.setAttribute("type", "text");
      container.appendChild(author);
      container.appendChild(inputElement2);
      container.appendChild(link);
    }

    inputElement.addEventListener("keypress", (e) => {
      if (e.key == "Enter") {
        this.handleInputs(inputType, order, e);
      }
    });
    inputElement2.addEventListener("keypress", (e) => {
      if (e.key == "Enter") {
        this.handleInputs(inputType, order, e);
      }
    });
    container.appendChild(inputElement);
    container.appendChild(closeImg);
    parent.appendChild(container);
    inputElement2.focus();
    this.setIds(parent, inputType);

    inputElement.addEventListener("input", () => {
      if (inputElement2.value != null) {
        var docInfo = this.state.refs;

        docInfo.content[inputElement.id.split(" ")[1] - 1] = {
          link: inputElement.value,
          author: inputElement2.value,
        };

        this.setState({ refs: docInfo });
      }
    });

    function deleteInput(event) {
      parent.removeChild(event.currentTarget.parentNode);
      this.setIds(parent, inputType);

      var docInfo = this.state.refs;

      docInfo.content.splice(inputElement.id.split(" ")[1] - 1, 1);

      this.setState({ refs: docInfo });
    }

    this.props.addDynamicContent(this.state.refs, this.props.order);
  }
  render() {
    return (
      <div className="blockContainer dynamicContentReferences">
        <div className="subtitleContainer">
          <h2 className="subtitle">#{this.props.order} References</h2>
          <img
            alt="close button"
            src="/icon/close.svg"
            onClick={(e) => this.props.remove(this.props.order, e)}
          />
        </div>
        <div
          className="colContainer"
          id={this.props.order + "referenceContainer"}
        >
          <div
            className="rowContainer lessMargin lastItem"
            onClick={(e) => this.handleInputs("reference", this.props.order, e)}
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
export default DynamicContentReferences;
