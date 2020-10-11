import React, { Component } from "react";
import DynamicContentSubtitle from "./DynamicContentSubtitle"
import DynamicContentText from "./DynamicContentText";
import DynamicContentImage from "./DynamicContentImage";
import DynamicContentList from "./DynamicContentList";
import DynamicContentReferences from "./DynamicContentReferences";
import DynamicContentToolbar from "./DynamicContentToolbar";


class DynamicContent extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mainContainer2">
          <h1 className="title">CONTENT</h1>
          <DynamicContentSubtitle />
          <DynamicContentText/>
          <DynamicContentImage/>
          <DynamicContentList/>
          <DynamicContentReferences/>
          <input
            value="CREATE"
            type="button"
            className="createDocumentButton"
          />
        </div>
        <DynamicContentToolbar/>
      </React.Fragment>
    );
  }
}
export default DynamicContent;
