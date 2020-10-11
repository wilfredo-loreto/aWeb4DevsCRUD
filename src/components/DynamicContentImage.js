import React, { Component } from "react";
import "./CreateDocument.scss";

class DynamicContentImage extends Component {
  render() {
    return (
      <div className="blockContainer dynamicContentImage">
            <div className="subtitleContainer">
              <h2 className="subtitle">Image</h2>
              <img src="/icon/close.svg" />
            </div>
            <div className="colContainer">
              <div className="rowContainer">
                <input
                  type="file"
                  className="submitButton"
                  accept="image/png, image/jpg"
                />
                <input
                  type="text"
                  placeholder="ALTERNATIVE TEXT (SEO) CONTEXT AND SUBJECT"
                  className="lessWidth"
                />
              </div>
            </div>
          </div>
    );
  }
}
export default DynamicContentImage;