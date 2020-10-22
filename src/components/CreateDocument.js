import React, { Component } from "react";
import ArticleRequirements from "./ArticleRequirements";
import TechRequirements from "./TechRequirements";
import DynamicContent from "./DynamicContent";
import axios from "axios";
import "./CreateDocument.scss";

class CreateDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBlocks: "",
      selectedDocType: "",
      newDoc: {
        content: [],
      
      },
      aux: false
    };
    this.handleBlocks = this.handleBlocks.bind(this);
    this.handleDocType = this.handleDocType.bind(this);
    this.newDocData = this.newDocData.bind(this);
    this.dynamicContent = this.dynamicContent.bind(this);
  }
  handleBlocks(docType) {
    this.setState({ displayBlocks: docType });
  }
  handleDocType(event) {
    this.setState({ selectedDocType: event.target.name });
  }

  newDocData(newDocInfo) {
    if (this.state.selectedDocType == "article") {
      var newArticle = {
        title: newDocInfo.title,
        type: newDocInfo.type,
        summary: newDocInfo.summary,
        img: newDocInfo.img,
        technologies: newDocInfo.technologies,
        tags: newDocInfo.tags,
        content: this.state.newDoc.content,
    
      };

      this.setState({ newDoc: newArticle });
    } else {
      var newtech = {
        title: newDocInfo.title,
        type: newDocInfo.type,
        summary: newDocInfo.summary,
        img: newDocInfo.img,
        logo: newDocInfo.logo,
        tags: newDocInfo.tags,
        parent: newDocInfo.parent,
        content: this.state.newDoc.content,
   
      };

      this.setState({ newDoc: newtech });
    }
  }

  async dynamicContent(content) {
    var newDoc = this.state.newDoc;
    var url,i;
    var images = []
    newDoc.content = content;
    console.log(newDoc.content + "this is newDoc.content");

    var inputsImages = document.querySelectorAll('input[type="file"]');
    console.log(inputsImages + "this is inputs values");

    for(i = 0;i<inputsImages.length;i++){
      images[i]=inputsImages[i].files[0]
    }

    var formData = new FormData()
    console.log(images)
    formData.append("title",newDoc.title)
    for(i = 0; i < images.length; i++){
        
      formData.append("images",images[i],images[i].name)
    }

    this.setState({ newDoc: newDoc });

    if (this.state.selectedDocType == "article") {
      url = "http://aweb4devsapi.herokuapp.com/save-article";
    } else {
      url = "http://aweb4devsapi.herokuapp.com/save-tech";

    }
    try{
      const saveDoc = axios.post(url, newDoc)
      const res = (await saveDoc).data
      console.log(res)
      try{
        const saveImages = axios.post("http://aweb4devsapi.herokuapp.com/hosting/save-images", formData)
        const res2 = (await saveImages)
        console.log(res2)
      }catch(err){
        console.log(err);
      }
    }catch(err){
      console.log(err);
    }
  }
  componentDidMount() {
    if (this.props.isEdit) {
      var path = this.props.location.pathname;
      var splitted = path.split("/");
      console.log(splitted);
      var documentType = splitted[2]
      var documentName = splitted[3] 
      var url = `http://aweb4devsapi.herokuapp.com/${documentType}/${documentName}`
      axios.get(url).then((res)=>{
        console.log(res.data);
      }).catch((err)=>{console.log(err);})
    }
  }
  render() {
    console.log(this.state.newDoc);

    return (
      <form className="form">
        <div className="hideToolbar">
          <div className="mainContainer1">
            <h1 className="title">CREATE A DOCUMENT</h1>
            <div className="blockContainer">
              <div className="subtitleContainer">
                <h2 className="subtitle">Document Type</h2>
              </div>
              <div className="colContainer">
                <div className="rowContainer">
                  <input
                    checked={this.state.selectedDocType == "article"}
                    name="article"
                    onChange={this.handleDocType}
                    onClick={() => this.handleBlocks("article")}
                    type="radio"
                  />
                  <label className="label" htmlFor="isArticle">
                    Article
                  </label>
                </div>
                <div className="rowContainer">
                  <input
                    checked={this.state.selectedDocType == "tech"}
                    name="tech"
                    onChange={this.handleDocType}
                    onClick={() => this.handleBlocks("tech")}
                    type="radio"
                  />
                  <label className="label" htmlFor="isTech">
                    Technology
                  </label>
                </div>
              </div>
            </div>
            {this.state.displayBlocks == "article" ? (
              <ArticleRequirements newDocData={this.newDocData} />
            ) : this.state.displayBlocks == "tech" ? (
              <TechRequirements newDocData={this.newDocData} />
            ) : null}
          </div>
        </div>
        {this.state.displayBlocks != "" ? (
          <DynamicContent dynamicContent={this.dynamicContent} />
        ) : null}
      </form>
    );
  }
}

export default CreateDocument;
