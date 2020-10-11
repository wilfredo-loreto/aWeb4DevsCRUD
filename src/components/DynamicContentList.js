import React, { Component } from "react";
import "./CreateDocument.scss";

class DynamicContentList extends Component {
  render() {

    return (
      <div className="blockContainer dynamicContentList">
            <div className="subtitleContainer">
              <h2 className="subtitle">List</h2>
              <img  alt="close button" src="/icon/close.svg" onClick={(e)=>this.props.remove(this.props.key,e)} />
            </div>
            <div className="colContainer">
              <div className="rowContainer lessMargin">
                <label className="numberlist">1.</label>
                <input type="text" className="totalWidth" />
              </div>
              <div className="rowContainer lessMargin">
                <label className="numberlist">2.</label>
                <input type="text" className="totalWidth" />
              </div>
              <div className="rowContainer lessMargin">
                <label className="numberlist">11.</label>
                <input type="text" className="totalWidth" />
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
export default DynamicContentList;