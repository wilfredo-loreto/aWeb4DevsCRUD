import React, { Component } from "react";
import "./CreateDocument.scss";
class DynamicContentToolbar extends Component {
  render() {
    return (
        <div className="toolsContainer">
        <div className="toolBlock subtitleTool"onClick={(e)=>this.props.pushBlock(0,e)} >
          <img  alt="tool" src="/icon/subtitle_tool.svg" className="tool" />
        </div>
        <div className="toolBlock textTool"onClick={(e)=>this.props.pushBlock(1,e)}>
          <img  alt="tool" src="/icon/text_tool.svg" className="tool" />
        </div>
        <div className="toolBlock imageTool"onClick={(e)=>this.props.pushBlock(2,e)}>
          <img  alt="tool" src="/icon/image_tool.svg" className="tool" />
        </div>
        <div className="toolBlock listTool"onClick={(e)=>this.props.pushBlock(3,e)}>
          <img  alt="tool" src="/icon/list_tool.svg" className="tool" />
        </div>
        <div className="toolBlock referenceTool"onClick={(e)=>this.props.pushBlock(4,e)}>
          <img  alt="tool" src="/icon/reference_tool.svg" className="tool" />
        </div>
      </div>
    );
  }
}
export default DynamicContentToolbar;