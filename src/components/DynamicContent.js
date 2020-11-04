import React, { Component } from "react";
import DynamicContentSubtitle from "./DynamicContentSubtitle";
import DynamicContentText from "./DynamicContentText";
import DynamicContentImage from "./DynamicContentImage";
import DynamicContentList from "./DynamicContentList";
import DynamicContentReferences from "./DynamicContentReferences";
import DynamicContentToolbar from "./DynamicContentToolbar";

class DynamicContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blocks: [],
      toolBarOptions: [
        DynamicContentSubtitle,
        DynamicContentText,
        DynamicContentImage,
        DynamicContentList,
        DynamicContentReferences,
      ],
      dynamicContent: [],
      auxContent: 0,
    };

    this.addDynamicContent = this.addDynamicContent.bind(this);
    this.createDoc = this.createDoc.bind(this);
  }
  addBlock(position, event) {
    var pushedBlock = this.state.blocks;
    pushedBlock.push(this.state.toolBarOptions[position]);
    this.setState({ blocks: pushedBlock });
    console.log(this.state.blocks);
  }
  removeBlock(position, event) {
    var removedBlock = [...this.state.blocks];
    removedBlock.splice(position, 1);
    this.setState({ blocks: removedBlock });
    var dynamicContent = this.state.dynamicContent;

    dynamicContent.splice(position, 1);

    this.setState({ dynamicContent: dynamicContent });

    if (position < this.state.auxContent) {
      this.setState({ auxContent: this.state.auxContent - 1 });
    }
  }

  addDynamicContent(content, order) {
    var dynamicContent = this.state.dynamicContent;
    dynamicContent[order] = content;

    this.setState({ dynamicContent: dynamicContent });
  }

  createDoc() {
    if (this.props.isEdit) {
      console.log("isedit");
      this.props.dynamicContentEdit(this.state.dynamicContent);
    } else {
      console.log("noedit");
      this.props.dynamicContent(this.state.dynamicContent);
    }
  }

  componentDidMount() {
    if (this.props.isEdit) {
      if (this.props.path == "tech") {
        var content = [...this.props.toEdit.tech.content];
      } else {
        var content = [...this.props.toEdit.article.content];
      }
      const auxContent = content.length;

      this.setState({ dynamicContent: content, auxContent: auxContent });

      for (var i = 0; i < content.length; i++) {
        switch (content[i].type) {
          case "subtitle":
            this.addBlock(0, null);

            break;
          case "text":
            this.addBlock(1, null);
            break;
          case "image":
            this.addBlock(2, null);
            break;
          case "list":
            this.addBlock(3, null);
            break;
          case "references":
            this.addBlock(4, null);
            break;
        }
      }
    }
  }

  render() {
  
    return (
      <React.Fragment>
        <div className="mainContainer2">
          <h1 className="title">CONTENT</h1>
          {this.state.blocks.map((block, id) =>
            id < this.state.auxContent
              ? React.createElement(block, {
                  key: id,
                  order: id,
                  remove: this.removeBlock.bind(this),
                  addDynamicContent: this.addDynamicContent.bind(this),
                  content: this.state.dynamicContent[id].content,
                  isEdit: this.props.isEdit,
                })
              : React.createElement(block, {
                  key: id,
                  order: id,
                  remove: this.removeBlock.bind(this),
                  addDynamicContent: this.addDynamicContent.bind(this),
                  isEdit: this.props.isEdit,
                })
          )}
          <input
            value="CREATE"
            type="button"
            onClick={this.createDoc}
            className="createDocumentButton"
          />
        </div>
        <DynamicContentToolbar pushBlock={this.addBlock.bind(this)} />
      </React.Fragment>
    );
  }
}
export default DynamicContent;
