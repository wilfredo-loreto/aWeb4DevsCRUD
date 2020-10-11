import React, { Component } from "react";
import "./CreateDocument.scss";

class DynamicContentReferences extends Component {
  render() {
    return (
        <div className="blockContainer dynamicContentReferences">
        <div className="subtitleContainer">
          <h2 className="subtitle">References</h2>
          <img src="/icon/close.svg" />
        </div>
        <div className="colContainer">
          <div className="rowContainer lessMargin">
            <label className="numberlist">1.</label>
            <span className="referenceText">Author: </span>
            <input type="text" className="totalWidth" />
            <span className="referenceText">Link: </span>
            <input type="text" className="lessWidth" />
          </div>
          <div className="rowContainer lessMargin">
            <label className="numberlist">2.</label>
            <span className="referenceText">Author: </span>
            <input type="text" className="totalWidth" />
            <span className="referenceText">Link: </span>
            <input type="text" className="lessWidth" />
          </div>
          <div className="rowContainer lessMargin">
            <label className="numberlist">3.</label>
            <span className="referenceText">Author: </span>
            <input type="text" className="totalWidth" />
            <span className="referenceText">Link: </span>
            <input type="text" className="lessWidth" />
          </div>

          <div className="rowContainer lessMargin">
            <div className="addNewItem totalWidth">
              <img src="/icon/plus.svg" className="plusImage" />
              <span>ADD NEW LIST ITEM</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DynamicContentReferences;