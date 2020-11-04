import React, { Component } from "react";
import "./CreateDocument.scss";

class DynamicContentList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: {
        type: "list",
        content: [],
      },
      auxList: 0,
    };

    this.handleInputs = this.handleInputs.bind(this);
    this.setIds = this.setIds.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.inputValue = this.inputValue.bind(this);
  }

  componentDidMount() {
    if (this.props.isEdit) {
      var list = this.state.list;
      if (this.props.content != null) {
        list.content = this.props.content;

        const auxList = list.content.length;

        this.setState({ list: list, auxList: auxList });
      }
    }
  }

  setIds(parent, type) {
    var childs = parent.childNodes;
    console.log(childs);
    var i = 0;
    for (i = 1; i < childs.length; i++) {
      if (type == "list") {
        childs[i].childNodes[0].setAttribute(
          "id",
          this.props.order + " " + type + " item " + i
        );
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

    inputElement.addEventListener("keypress", (e) => {
      if (e.key == "Enter") {
        this.handleInputs(inputType, order, e);
      }
    });
    container.appendChild(inputElement);
    container.appendChild(closeImg);
    parent.appendChild(container);
    inputElement.focus();
    this.setIds(parent, inputType);

    inputElement.addEventListener("input", () => {
      var docInfo = this.state.list;

      docInfo.content[inputElement.id.split("item")[1] - 1] =
        inputElement.value;

      this.setState({ list: docInfo });
    });

    function deleteInput(event) {
      parent.removeChild(event.currentTarget.parentNode);

      this.setIds(parent, inputType);

      var docInfo = this.state.list;

      docInfo.content.splice(inputElement.id.split("item")[1] - 1, 1);

      this.setState({ list: docInfo });
    }

    this.props.addDynamicContent(this.state.list, this.props.order);
  }
  inputValue(event, i) {
    var docInfo = this.state.list;

    docInfo.content[i] = event.target.value;

    this.setState({ list: docInfo });
  }

  deleteInput(order, event, i) {
    var parent = document.getElementById(order + "listContainer");
    var childs = parent.childNodes;
    console.log(childs);

    var docInfo = this.state.list;

    docInfo.content.splice(i, 1);

    this.setState({ list: docInfo });

    if (i < this.state.auxList) {
      this.setState({ auxList: this.state.auxList - 1 });
      console.log(this.state.list);
    }
    this.setIds(parent, "list");
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
          {this.props.content != null
            ? this.props.content.map((item, i) => (
                <React.Fragment key={"list" + i}>
                  {i < this.state.auxList ? (
                    <div className="rowContainer lessMargin">
                      <input
                        id={this.props.order + " " + "list item " + (i + 1)}
                        type="text"
                        value={item}
                        onChange={(e) => this.inputValue(e, i)}
                        className="totalWidth"
                      />
                      <img
                        src="/icon/close.svg"
                        onClick={(e) =>
                          this.deleteInput(this.props.order, e, i)
                        }
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
export default DynamicContentList;
