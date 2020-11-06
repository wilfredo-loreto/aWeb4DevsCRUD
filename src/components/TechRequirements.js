import React, { Component } from "react";
import "./CreateDocument.scss";

class CreateDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previewCard: null,
      previewLogo: null,
      selectedTechType: "",
      newDocInfo: {
        title: "",
        type: "",
        logo: "",
        img: "",
        summary: "",
        tags: [],
        parent: "",
      },
    };
    this.handleTechType = this.handleTechType.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSummary = this.handleSummary.bind(this);
    this.handleParent = this.handleParent.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.handleLogo = this.handleLogo.bind(this);
  }
  handleTechType(event) {
    var docInfo = this.state.newDocInfo;

    docInfo.type = event.target.name;

    this.setState({ selectedTechType: event.target.name, newDocInfo: docInfo });

    this.props.newDocData(this.state.newDocInfo);
  }

  handleImg(event) {
    var docInfo = this.state.newDocInfo;

    docInfo.img = event.target.files[0].name;

    this.setState({
      newDocInfo: docInfo,
      previewCard: URL.createObjectURL(event.target.files[0]),
    });

    this.props.newDocData(this.state.newDocInfo);
  }

  handleLogo(event) {
    var docInfo = this.state.newDocInfo;

    docInfo.logo = event.target.files[0].name;

    this.setState({ newDocInfo: docInfo });

    this.setState({
      newDocInfo: docInfo,
      previewLogo: URL.createObjectURL(event.target.files[0]),
    });
    this.props.newDocData(this.state.newDocInfo);
  }

  handleTitle(event) {
    var docInfo = this.state.newDocInfo;

    docInfo.title = event.target.value;

    this.setState({ newDocInfo: docInfo });

    this.props.newDocData(this.state.newDocInfo);
  }

  handleSummary(event) {
    var docInfo = this.state.newDocInfo;

    docInfo.summary = event.target.value;

    this.setState({ newDocInfo: docInfo });

    this.props.newDocData(this.state.newDocInfo);
  }

  handleParent(event) {
    var docInfo = this.state.newDocInfo;

    docInfo.parent = event.target.value;

    this.setState({ newDocInfo: docInfo });

    this.props.newDocData(this.state.newDocInfo);
  }

  setIds(parent, type) {
    var childs = parent.childNodes;
    var i = 0;
    for (i = 1; i < childs.length; i++) {
      childs[i].firstElementChild.setAttribute("id", type + " " + i);
    }
  }
  handleInputs(inputType, event) {
    var previewImg = document.createElement("img");
    var inputElement = document.createElement("input");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "lessWidth");

    var container = document.createElement("div");
    container.setAttribute("class", "rowContainer lessMargin");

    var parent = document.getElementById(inputType + "Container");

    var closeImg = document.createElement("img");
    closeImg.setAttribute("src", "/icon/close.svg");
    closeImg.addEventListener("click", deleteInput.bind(this));
    inputElement.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.handleInputs(inputType, e);
      }
    });
    closeImg.addEventListener("click", deleteInput.bind(this));
    container.appendChild(inputElement);
    container.appendChild(closeImg);
    parent.appendChild(container);
    inputElement.focus();
    this.setIds(parent, inputType);

    inputElement.addEventListener("input", () => {
      var docInfo = this.state.newDocInfo;

      docInfo.tags[inputElement.id.split(" ")[1] - 1] = inputElement.value;

      this.setState({ newDocInfo: docInfo });
    });

    function deleteInput(event) {
      parent.removeChild(event.currentTarget.parentNode);
      this.setIds(parent, inputType);

      var docInfo = this.state.newDocInfo;

      docInfo.tags.splice(inputElement.id.split(" ")[1] - 1, 1);

      this.setState({ newDocInfo: docInfo });
    }

    this.props.newDocData(this.state.newDocInfo);
  }

  inputValue(event, i, inputType) {
    var docInfo = this.state.newDocInfo;

    docInfo.tags[i] = event.target.value;

    this.setState({ newDocInfo: docInfo });
  }

  deleteInput(inputType, event, i) {
    console.log(event.currentTarget);
    var parent = document.getElementById(inputType + "Container");

    var docInfo = this.state.newDocInfo;

    docInfo.tags.splice(i, 1);

    this.setState({ newDocInfo: docInfo });

    if (i < this.state.auxTags) {
      this.setState({ auxTags: this.state.auxTags - 1 });
    }

    this.setIds(parent, inputType);
  }

  componentDidMount() {
    if (this.props.isEdit) {
      var toEdit = {
        title: this.props.toEdit.tech.title,
        type: this.props.toEdit.tech.type,
        img: this.props.toEdit.tech.img,
        logo: this.props.toEdit.tech.logo,
        summary: this.props.toEdit.tech.summary,
        tags: this.props.toEdit.tech.tags,
        parent: this.props.toEdit.tech.parent,
      };
      console.log(toEdit);

      const auxTags = toEdit.tags.length;

      this.setState({
        newDocInfo: toEdit,
        selectedTechType: toEdit.type,
        auxTags: auxTags,
      });

      
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
                checked={this.state.selectedTechType === "frontend"}
                name="frontend"
                onChange={this.handleTechType}
                type="radio"
              />

              <label className="label" htmlFor="isArticle">
                Frontend
              </label>
            </div>
            <div className="rowContainer">
              <input
                checked={this.state.selectedTechType === "backend"}
                name="backend"
                onChange={this.handleTechType}
                type="radio"
              />
              <label className="label" htmlFor="isArticle">
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
              <input
                type="text"
                value={this.state.newDocInfo.title}
                onChange={this.handleTitle}
                className="lessWidth"
              />
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Summary</h2>
          </div>
          <div className="colContainer">
            <div className="rowContainer">
              <input
                type="text"
                value={this.state.newDocInfo.summary}
                onChange={this.handleSummary}
                className="totalWidth"
              />
            </div>
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Image</h2>
          </div>
          <div className="colContainer">
            {this.props.isEdit ? (
              <span>{this.state.newDocInfo.img}</span>
            ) : null}
            <div className="rowContainer">
              <input
                type="file"
                onChange={this.handleImg}
                className="submitButton"
                accept="image/*"
              />
            </div>
            <img src={this.state.previewCard} />
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Logo</h2>
          </div>
          <div className="colContainer">
            {this.props.isEdit ? (
              <span>{this.state.newDocInfo.logo}</span>
            ) : null}
            <div className="rowContainer">
              <input
                onChange={this.handleLogo}
                type="file"
                className="submitButton"
                accept="image/png, image/jpg"
              />
            </div>
            <img src={this.state.previewLogo} />
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">
              Tags (Keywords for Search Bar) (NOTE: FIRST TAG IS THE MAIN TAG TO
              BE DISPLAYED IN ACCORDION)
            </h2>
          </div>
          <div className="colContainer" id="tagContainer">
            <div
              className="rowContainer lessMargin lastItem"
              onClick={(e) => {
                this.handleInputs("tag", e);
              }}
            >
              <div className="addNewItem ">
                <img src="/icon/plus.svg" className="plusImage" />
                <span>ADD NEW TAG</span>
              </div>
            </div>
            {this.props.isEdit
              ? this.props.toEdit.tech.tags.map((tag, i) => (
                  <React.Fragment key={"tags" + i}>
                    {i < this.state.auxTags ? (
                      <div className="rowContainer lessMargin">
                        <input
                          id={"technology" + " " + (i + 1)}
                          type="text"
                          value={tag}
                          onChange={(e) => this.inputValue(e, i, "tag")}
                          className="lessWidth"
                        />
                        <img
                          src="/icon/close.svg"
                          onClick={(e) => this.deleteInput("tag", e, i)}
                        />
                      </div>
                    ) : null}
                  </React.Fragment>
                ))
              : null}
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
              <input
                type="text"
                value={this.state.newDocInfo.parent}
                onChange={this.handleParent}
                className="totalWidth"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateDocument;
