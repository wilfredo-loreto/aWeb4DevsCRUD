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
      auxReft: 0,
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.inputValue = this.inputValue.bind(this);
  }

  componentDidMount() {
    if (this.props.isEdit) {
      var reft = this.state.refs;

      if (this.props.content != null) {
        reft.content = this.props.content;

        const auxReft = reft.content.length;

        this.setState({ reft: reft, auxReft: auxReft });
      }
    }
  }
  setIds(parent, type) {
    var childs = parent.childNodes;
    var i = 0;
    for (i = 1; i < childs.length; i++) {
      if (type == "list" || type == "reference") {
        if (type == "list") {
          childs[i].childNodes[0].setAttribute(
            "id",
            this.props.order + " " + type + " item " + i
          );
        } else {
          childs[i].childNodes[1].setAttribute(
            "id",
            type + " " + i + " Author"
          );
          childs[i].childNodes[3].setAttribute("id", type + " " + i + " Link");
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

    inputElement2.addEventListener("input", () => {
      if (inputElement.value != null) {
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

  inputValue(event, i, type) {
    var docInfo = this.state.list;

    if (type == "author") {
      docInfo.content[i].author = event.target.value;
    } else {
      docInfo.content[i].link = event.target.value;
    }

    this.setState({ list: docInfo });
  }

  deleteInput(order, i) {
    var docInfo = this.state.refs;
    var parent = document.getElementById(order + "reference" + "Container");

    docInfo.content.splice(i, 1);

    if (i < this.state.auxReft) {
      this.setState({ auxReft: this.state.auxReft - 1 });
      console.log(this.state.list);
    }
    this.setState({ refs: docInfo });
    this.setIds(parent, "reference");
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

          {this.props.content != null
            ? this.props.content.map((item, i) => (
                <React.Fragment key={"ref" + i}>
                  {i < this.state.auxReft ? (
                    <div className="rowContainer lessMargin">
                      <span className="referenceText">Author: </span>
                      <input
                        id={"reference" + " " + (i + 1) + " Author"}
                        onChange={(e) => this.inputValue(e, i, "author")}
                        type="text"
                        value={item.author}
                        className="totalWidth"
                      />
                      <span className="referenceText">Link: </span>
                      <input
                        id={"reference" + " " + (i + 1) + " Link"}
                        onChange={(e) => this.inputValue(e, i, "link")}
                        type="text"
                        value={item.link}
                        className="lessWidth"
                      />
                      <img
                        src="/icon/close.svg"
                        onClick={(e) => this.deleteInput(this.props.order, i)}
                      />
                    </div>
                  ) : null}
                </React.Fragment>
              ))
            : null}
        </div>
      </div>
    );
  }
}
export default DynamicContentReferences;
