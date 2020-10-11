import React, { Component } from "react";
import "./CreateDocument.scss";

class DynamicContentSubtitle extends Component {
  render() {
    return (
      <div className="blockContainer dynamicContentSubtitle">
        <div className="subtitleContainer">
          <h2 className="subtitle">Subtitle</h2>
          <img  alt="close button" src="/icon/close.svg" onClick={(e)=>this.props.remove(this.props.key,e)}/>
        </div>
        <div className="colContainer">
          <div className="rowContainer">
            <input type="text" className="totalWidth" />
          </div>
        </div>
      </div>
    );
  }
}
export default DynamicContentSubtitle;
