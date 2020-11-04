import React, { Component } from "react";
import "./CreateDocument.scss";

class ArticleRequirements extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      selectedTechType: "",
      newDocInfo: {
        title: "",
        type: "",
        img: "",
        summary: "",
        technologies: [],
        tags: [],
      },
      auxTechs: 0,
      auxTags: 0,
    };
    this.handleTechType = this.handleTechType.bind(this);
    this.handleTitle = this.handleTitle.bind(this);
    this.handleSummary = this.handleSummary.bind(this);
    this.handleImg = this.handleImg.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.inputValue = this.inputValue.bind(this);
  }
  handleTechType(event) {
    var docInfo = this.state.newDocInfo;

    docInfo.type = event.target.name;

    this.setState({ selectedTechType: event.target.name, newDocInfo: docInfo });

    this.props.newDocData(this.state.newDocInfo);
  }

  handleTitle(event) {
    var docInfo = this.state.newDocInfo;

    docInfo.title = event.target.value;

    this.setState({ newDocInfo: docInfo });

    this.props.newDocData(this.state.newDocInfo);
  }

  handleImg(event) {
    var docInfo = this.state.newDocInfo;

    docInfo.img = event.target.files[0].name;

    this.setState({ newDocInfo: docInfo });

    this.props.newDocData(this.state.newDocInfo);
    this.setState({
      file: URL.createObjectURL(event.target.files[0]),
    });
  }

  handleSummary(event) {
    var docInfo = this.state.newDocInfo;

    docInfo.summary = event.target.value;

    this.setState({ newDocInfo: docInfo });

    this.props.newDocData(this.state.newDocInfo);
  }

  setIds(parent, type) {
    var childs = parent.childNodes;
    var i = 0;
    for (i = 1; i < childs.length; i++) {
      childs[i].firstElementChild.setAttribute("id", type + " " + i);
      console.log("im in for");
    }
  }
  handleInputs(inputType, event) {
    var inputElement = document.createElement("input");

    var container = document.createElement("div");
    var parent = document.getElementById(inputType + "Container");
    var closeImg = document.createElement("img");
    inputElement.setAttribute("type", "text");
    inputElement.setAttribute("class", "lessWidth");
    container.setAttribute("class", "rowContainer lessMargin");

    closeImg.setAttribute("src", "/icon/close.svg");
    closeImg.addEventListener("click", deleteInput.bind(this));
    inputElement.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.handleInputs(inputType, e);
      }
    });

    container.appendChild(inputElement);
    container.appendChild(closeImg);
    parent.appendChild(container);
    inputElement.focus();
    this.setIds(parent, inputType);

    if (inputType == "tag") {
      inputElement.addEventListener("input", () => {
        var docInfo = this.state.newDocInfo;

        docInfo.tags[inputElement.id.split(" ")[1] - 1] = inputElement.value;

        this.setState({ newDocInfo: docInfo });
      });
    } else {
      inputElement.addEventListener("input", () => {
        var docInfo = this.state.newDocInfo;

        docInfo.technologies[inputElement.id.split(" ")[1] - 1] =
          inputElement.value;

        this.setState({ newDocInfo: docInfo });
      });
    }

    function deleteInput(event) {
      parent.removeChild(event.currentTarget.parentNode);
      this.setIds(parent, inputType);

      if (inputType == "tag") {
        var docInfo = this.state.newDocInfo;

        docInfo.tags.splice(inputElement.id.split(" ")[1] - 1, 1);

        this.setState({ newDocInfo: docInfo });
      } else {
        var docInfo = this.state.newDocInfo;

        docInfo.technologies.splice(inputElement.id.split(" ")[1] - 1, 1);

        this.setState({ newDocInfo: docInfo });
      }
    }

    this.props.newDocData(this.state.newDocInfo);
  }

  inputValue(event, i, inputType) {
    var docInfo = this.state.newDocInfo;
    if (inputType == "tag") {
      docInfo.tags[i] = event.target.value;

      this.setState({ newDocInfo: docInfo });
    } else {
      docInfo.technologies[i] = event.target.value;

      this.setState({ newDocInfo: docInfo });
    }
  }

  deleteInput(inputType, event, i) {
    console.log(event.currentTarget);
    var parent = document.getElementById(inputType + "Container");

    if (inputType == "tag") {
      var docInfo = this.state.newDocInfo;

      docInfo.tags.splice(i, 1);

      this.setState({ newDocInfo: docInfo });

      if (i < this.state.auxTags) {
        this.setState({ auxTags: this.state.auxTags - 1 });
      }
    } else {
      var docInfo = this.state.newDocInfo;

      docInfo.technologies.splice(i, 1);

      this.setState({ newDocInfo: docInfo });

      if (i < this.state.auxTechs) {
        this.setState({ auxTechs: this.state.auxTechs - 1 });
      }
    }
    this.setIds(parent, inputType);
  }

  componentDidMount() {
    if (this.props.isEdit) {
      console.log("holaaa");
      var toEdit = {
        title: this.props.toEdit.article.title,
        type: this.props.toEdit.article.type,
        img: this.props.toEdit.article.img,
        summary: this.props.toEdit.article.summary,
        technologies: this.props.toEdit.article.technologies,
        tags: this.props.toEdit.article.tags,
      };
      console.log(toEdit);

      const auxTechs = toEdit.technologies.length;
      const auxTags = toEdit.tags.length;

      this.setState({
        newDocInfo: toEdit,
        selectedTechType: toEdit.type,
        auxTechs: auxTechs,
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

              <label className="label" for="isArticle">
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

              <label className="label" for="isArticle">
                Backend
              </label>
            </div>
            <div className="rowContainer">
              <input
                checked={this.state.selectedTechType == "mixed"}
                name="mixed"
                onChange={this.handleTechType}
                type="radio"
              />

              <label className="label" for="isArticle">
                Mixed
              </label>
            </div>
            <div className="rowContainer">
              <input
                checked={this.state.selectedTechType == "none"}
                name="none"
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
                onChange={this.handleImg}
                type="file"
                className="submitButton"
                accept="image/*"
              />
            </div>
            <img src={this.state.file} />
          </div>
        </div>
        <div className="blockContainer">
          <div className="subtitleContainer">
            <h2 className="subtitle">Technologies</h2>
          </div>
          <div className="colContainer" id="technologyContainer">
            <div
              className="rowContainer lessMargin lastItem"
              onClick={(e) => this.handleInputs("technology", e)}
            >
              <div className="addNewItem">
                <img src="/icon/plus.svg" className="plusImage" />
                <span>ADD NEW TECHNOLOGY</span>
              </div>
            </div>
            {this.props.isEdit
              ? this.props.toEdit.article.technologies.map((tech, i) => (
                  <React.Fragment key={"techs" + i}>
                    {i < this.state.auxTechs ? (
                      <div className="rowContainer lessMargin">
                        <input
                          id={"technology" + " " + (i + 1)}
                          type="text"
                          value={tech}
                          onChange={(e) => this.inputValue(e, i, "technology")}
                          className="lessWidth"
                        />
                        <img
                          src="/icon/close.svg"
                          onClick={(e) => this.deleteInput("technology", e, i)}
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
            <h2 className="subtitle">Tags</h2>
          </div>
          <div className="colContainer" id="tagContainer">
            <div
              className="rowContainer lessMargin lastItem"
              onClick={(e) => this.handleInputs("tag", e)}
            >
              <div className="addNewItem">
                <img src="/icon/plus.svg" className="plusImage" />
                <span>ADD NEW TAG</span>
              </div>
            </div>
            {this.props.isEdit
              ? this.props.toEdit.article.tags.map((tag, i) => (
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
      </React.Fragment>
    );
  }
}

export default ArticleRequirements;
