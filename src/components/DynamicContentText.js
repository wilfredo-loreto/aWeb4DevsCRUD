import React, { Component } from "react";
import "./CreateDocument.scss";

class DynamicContentText extends Component {
  render() {
    return (
      <div className="blockContainer dynamicContentText">
      <div className="subtitleContainer">
        <h2 className="subtitle">Text</h2>
        <img  alt="close button" src="/icon/close.svg" onClick={(e)=>this.props.remove(this.props.key,e)}/>
      </div>
      <div className="colContainer">
        <div className="rowContainer">
          <textarea className="totalWidth textarea" />
        </div>
      </div>
    </div>
    );
  }
}
export default DynamicContentText;