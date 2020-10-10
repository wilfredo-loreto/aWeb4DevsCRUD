import React, { Component } from "react";

class DynamicContent extends Component {
    render(){
return(

    <div className="mainContainer2">
          <h1 className="title">CONTENT</h1>
          <div className="blockContainer dynamicContentSubtitle">
            <div className="subtitleContainer">
              <h2 className="subtitle">Subtitle</h2>
              <img src="/icon/close.svg" />
            </div>
            <div className="colContainer">
              <div className="rowContainer">
                <input type="text" className="totalWidth" />
              </div>
            </div>
          </div>
          <div className="blockContainer dynamicContentText">
            <div className="subtitleContainer">
              <h2 className="subtitle">Text</h2>
              <img src="/icon/close.svg" />
            </div>
            <div className="colContainer">
              <div className="rowContainer">
                <textarea className="totalWidth textarea" />
              </div>
            </div>
          </div>
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
        <div className="blockContainer dynamicContentList">
          <div className="subtitleContainer">
            <h2 className="subtitle">List</h2>
            <img src="/icon/close.svg" />
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
          <input value="CREATE"type="button" className="createDocumentButton"/>
        </div>
        
        )
    }
}export default DynamicContent;