import React, { Component } from "react";
import DynamicContentSubtitle from "./DynamicContentSubtitle"
import DynamicContentText from "./DynamicContentText";
import DynamicContentImage from "./DynamicContentImage";
import DynamicContentList from "./DynamicContentList";
import DynamicContentReferences from "./DynamicContentReferences";
import DynamicContentToolbar from "./DynamicContentToolbar";


class DynamicContent extends Component {
  constructor(props){
    super(props);
    this.state={
      blocks:[],
      toolBarOptions: [DynamicContentSubtitle,DynamicContentText,DynamicContentImage,DynamicContentList,DynamicContentReferences],
      dynamicContent: []
    }

    this.addDynamicContent = this.addDynamicContent.bind(this);
    this.createDoc = this.createDoc.bind(this);
  }
    addBlock(position,event){
      var pushedBlock = [...this.state.blocks]
      pushedBlock.push(this.state.toolBarOptions[position])
      this.setState({blocks:pushedBlock})
     
    }
    removeBlock(position,event){
      var removedBlock = [...this.state.blocks]
      removedBlock.splice(position,1)
      this.setState({blocks:removedBlock})
      var dynamicContent = this.state.dynamicContent

      dynamicContent.splice(position, 1)

      this.setState({dynamicContent:  dynamicContent})

    }

    addDynamicContent(content, order){
      var dynamicContent = this.state.dynamicContent
      dynamicContent[order] = content

      this.setState({dynamicContent:  dynamicContent})
    }

    createDoc(){

      this.props.dynamicContent(this.state.dynamicContent)

    }
  
  render() {
    return (
      <React.Fragment>
        <div className="mainContainer2">
          <h1 className="title" >CONTENT</h1>
          {this.state.blocks.map((block,id)=>(React.createElement(block,{key:id,order:id,remove:this.removeBlock.bind(this),addDynamicContent:this.addDynamicContent.bind(this)})))}
       
          <input
            value="CREATE"
            type="button"
            onClick={this.createDoc}
            className="createDocumentButton"
          />
        </div>
        <DynamicContentToolbar pushBlock={this.addBlock.bind(this)}/>
      </React.Fragment>
    );
  }
}
export default DynamicContent;
