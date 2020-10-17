import React, { Component } from "react";
import "./CreateDocument.scss";

class DynamicContentImage extends Component {
  componentDidMount(){
    console.log(this.props.order);
  }

  handleImg(event){

    console.log(event.target.value)

  }


  render() {
    return (
      <div className="blockContainer dynamicContentImage">
            <div className="subtitleContainer">
    <h2 className="subtitle">#{this.props.order} Image </h2>
              <img alt="close button" src="/icon/close.svg"onClick={(e)=>this.props.remove(this.props.order,e)} />
            </div>
            <div className="colContainer">
              <div className="rowContainer">
                <input
                  type="file"
                  className="submitButton"
                  onChange={this.handleImg}
                  accept="image/png image/jpg"
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