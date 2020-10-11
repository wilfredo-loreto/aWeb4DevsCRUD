import React, { Component } from "react";
import "./CreateDocument.scss";

class DynamicContentToolbar extends Component {
  render() {
    return (
        <div className="toolsContainer">
        <div className="toolBlock subtitleTool">
          <img src="/icon/subtitle_tool.svg" className="tool" />
        </div>
        <div className="toolBlock textTool">
          <img src="/icon/text_tool.svg" className="tool" />
        </div>
        <div className="toolBlock imageTool">
          <img src="/icon/image_tool.svg" className="tool" />
        </div>
        <div className="toolBlock listTool">
          <img src="/icon/list_tool.svg" className="tool" />
        </div>
        <div className="toolBlock referenceTool">
          <img src="/icon/reference_tool.svg" className="tool" />
        </div>
      </div>
    );
  }
}
export default DynamicContentToolbar;