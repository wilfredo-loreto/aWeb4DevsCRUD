import React, { Component } from "react";
import "./CreateDocument.scss";

class DynamicContentImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: null,
      image: {
        type: "image",
        content: {
          img: "",
          alt: "",
        },
      },
    };

    this.handleImg = this.handleImg.bind(this);
    this.handleAltText = this.handleAltText.bind(this);
  }

  handleImg(event) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (e) => {
      console.log(e.target.result);
    };

    var image = this.state.image;
    image.content.img = event.target.files[0].name;

    this.setState({
      image: image,
      showImage: URL.createObjectURL(event.target.files[0]),
    });

    this.props.addDynamicContent(image, this.props.order);
  }

  handleAltText(event) {
    var image = this.state.image;
    image.content.alt = event.target.value;

    this.setState({ image: image });

    this.props.addDynamicContent(image, this.props.order);
  }

  componentDidMount(){

    if(this.props.content != null){
      var image = {
        type: "image",
        content: {
          img: this.props.content.img,
          alt: this.props.content.alt
        }
      };

      this.setState({image: image})
    }
  }

  render() {
    return (
      <div className="blockContainer dynamicContentImage">
        <div className="subtitleContainer">
          <h2 className="subtitle">#{this.props.order} Image </h2>
          <img
            alt="close button"
            src="/icon/close.svg"
            onClick={(e) => this.props.remove(this.props.order, e)}
          />
        </div>
        <div className="colContainer">
          {this.props.content != null ? (
            <span>{this.props.content.img}</span>
          ) : null}
          <div className="rowContainer">
            <input
              type="file"
              className="submitButton"
              onChange={this.handleImg}
              accept="image/*"
            />
             {this.props.content != null ? (
               <input
               id="altText"
               onChange={this.handleAltText}
               type="text"
               placeholder="ALTERNATIVE TEXT (SEO) CONTEXT AND SUBJECT"
               className="lessWidth"
               value = {this.props.content.alt}
             />
          ) : (
            <input
              id="altText"
              onChange={this.handleAltText}
              type="text"
              placeholder="ALTERNATIVE TEXT (SEO) CONTEXT AND SUBJECT"
              className="lessWidth"
            
            />
          )}
            
          </div>
          <img src={this.state.showImage} />
        </div>
      </div>
    );
  }
}
export default DynamicContentImage;
