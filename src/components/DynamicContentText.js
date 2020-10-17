import React, { Component } from "react";
import "./CreateDocument.scss";

class DynamicContentText extends Component {
  constructor(props){
    super(props);

    this.handleText= this.handleText.bind(this);

  }

  handleText(event){



    var text = {
      type: "text",
      content: event.target.value.split("\n\n")
    }

    this.props.addDynamicContent(text, this.props.order)


  }
  render() {
    return (
      <div className="blockContainer dynamicContentText">
      <div className="subtitleContainer">
        <h2 className="subtitle">#{this.props.order} Text</h2>
        <img  alt="close button" src="/icon/close.svg" onClick={(e)=>this.props.remove(this.props.order,e)}/>
      </div>
      <div className="colContainer">
        <div className="rowContainer">
          <textarea onChange={this.handleText} className="totalWidth textarea" />
        </div>
      </div>
    </div>
    );
  }
}
export default DynamicContentText;