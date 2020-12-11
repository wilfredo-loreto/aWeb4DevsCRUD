import React, { Component } from "react";
import ArticleRequirements from "./ArticleRequirements";
import TechRequirements from "./TechRequirements";
import DynamicContent from "./DynamicContent";
import axios from "axios";
import config from "../config"
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
      docToEdit: {},
      path: "",
      name: "",
    };
    this.handleBlocks = this.handleBlocks.bind(this);
    this.handleDocType = this.handleDocType.bind(this);
    this.newDocData = this.newDocData.bind(this);
    this.dynamicContent = this.dynamicContent.bind(this);
    this.dynamicContentEdit = this.dynamicContentEdit.bind(this);
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
        password: config.SECRET_PASSWORD
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
        password: config.SECRET_PASSWORD
      };
   
      this.setState({ newDoc: newtech });
    }
  }

  async dynamicContent(content) {
    var newDoc = this.state.newDoc;
    var url, i;
    var images = [];
    var requirements = true;

    newDoc.content = content;

    console.log(newDoc.content + "this is newDoc.content");

    var inputsImages = document.querySelectorAll('input[type="file"]');

    for (i = 0; i < inputsImages.length; i++) {
      images[i] = inputsImages[i].files[0];
    }

    var formData = new FormData();
    console.log(images);
    formData.append("title", newDoc.title);
    for (i = 0; i < images.length; i++) {
      if (images[i] != undefined) {
        formData.append("images", images[i], images[i].name);
      }
    }

    this.setState({ newDoc: newDoc });

    if (this.state.selectedDocType == "article") {
      url = "http://aweb4devsapi.herokuapp.com/save-article";


      if (
        newDoc.title == "" ||
        newDoc.summary == "" ||
        newDoc.img == "" ||
        newDoc.type == "" ||
        newDoc.technologies == null ||
        newDoc.tags == null
      ) {
        requirements = false;
      }else{
        
        newDoc.tags.push(newDoc.title)
        newDoc.tags.push(newDoc.type)
      }
    } else {
      url = "http://aweb4devsapi.herokuapp.com/save-tech";
        
      if (
        newDoc.title == "" ||
        newDoc.summary == "" ||
        newDoc.img == "" ||
        newDoc.type == "" ||
        newDoc.logo == "" ||
        newDoc.tags == null
      ) {
        requirements = false;
      }else{
        let titleTags = newDoc.title.split(" ");
     
        for(i = 0; i < titleTags.length; i++){

          newDoc.tags.push(titleTags[i].toLowerCase());
        }
        newDoc.tags.push(newDoc.type)

      }
    }

    if (requirements) {
      try {
        const saveDoc = axios.post(url, newDoc);
        const res = (await saveDoc).data;
        console.log(res);
        window.alert(res);
        document.location.reload(true);
        try {
          // CODE TO UPLOAD TO VERCEL MUST BE HERE
          // const saveImages = axios.post(
            // "http://aweb4devsapi.herokuapp.com/hosting/save-images",
            // formData
          // );
          // const res2 = await saveImages;
          // console.log(res2);
          // window.alert("Uploaded Images");
        } catch (err) {
          // console.log(err);
          // window.alert(err);
        }
      } catch (err) {
        console.log(err);
        window.alert(err);
      }
    } else {
      window.alert("Please fill all fields");
    }
  }
  async dynamicContentEdit(content) {
    var newDoc = this.state.newDoc;
    var url, i;
    var images = [];
    var aux = false;
    var requirements = true;

    newDoc.content = content;
    console.log(newDoc.content + "this is newDoc.content");

    var inputsImages = document.querySelectorAll('input[type="file"]');
    console.log(inputsImages + "this is inputs values");

    for (i = 0; i < inputsImages.length; i++) {
      images[i] = inputsImages[i].files[0];
    }

    var formData = new FormData();
    console.log(images);
    formData.append("title", newDoc.title);
    for (i = 0; i < images.length; i++) {
      if (images[i] != undefined) {
        aux = true;
        formData.append("images", images[i], images[i].name);
      }
    }

    this.setState({ newDoc: newDoc });

    if (this.state.selectedDocType == "article") {
      url = "http://aweb4devsapi.herokuapp.com/article/" + this.state.name;

      if (
        newDoc.title == "" ||
        newDoc.summary == "" ||
        newDoc.img == "" ||
        newDoc.type == "" ||
        newDoc.technologies == null ||
        newDoc.tags == null
      ) {
        requirements = false;
      }
    } else {
      url = "http://aweb4devsapi.herokuapp.com/tech/" + this.state.name;

      if (
        newDoc.title == "" ||
        newDoc.summary == "" ||
        newDoc.img == "" ||
        newDoc.type == "" ||
        newDoc.logo == "" ||
        newDoc.tags == null
      ) {
        requirements = false;
      }
    }
    console.log(newDoc);
    if (requirements) {
      try {
        const saveDoc = axios.put(url, newDoc);
        const res = (await saveDoc).data;
        console.log(res);
        window.alert(res);
        document.location.reload(true);
        if (aux) {
          try {
          // CODE TO UPLOAD IMAGES TO VERCEL MUST BE HERE 
          //   const saveImages = axios.post(
          //     "http://aweb4devsapi.herokuapp.com/hosting/save-images",
          //     formData
          //   );
          //   const res2 = await saveImages;
          //   console.log(res2);
          //   window.alert("Uploaded Images");
          } catch (err) {
          //   console.log(err);
          //   window.alert(err);
          }
        }
      } catch (err) {
        console.log(err);
        window.alert(err);
      }
    } else {
      window.alert("Please fill all fields");
    }
  }
  async componentDidMount() {
    if (this.props.isEdit) {
      var path = this.props.location.pathname;
      var splitted = path.split("/");
      var documentType = splitted[2];
      this.setState({ path: documentType, selectedDocType: documentType });
      const documentName = splitted[3];
      this.setState({ name: documentName });
      var url = `http://aweb4devsapi.herokuapp.com/${documentType}/${documentName}`;
      await axios
        .get(url)
        .then((res) => {
          this.setState({ docToEdit: res.data });
         
        })
        .catch((err) => {
          console.log(err);
        });

        if(documentType == "article"){

          this.newDocData(this.state.docToEdit.article)
        }else{
          this.newDocData(this.state.docToEdit.tech)
        }

      this.handleBlocks(documentType);
    }
  }
  render() {
    return (
      <form className="form">
        <div className="hideToolbar">
          <div className="mainContainer1">
            <h1 className="title">CREATE A DOCUMENT</h1>
            {!this.props.isEdit ? (
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
            ) : null}
            {this.state.displayBlocks == "article" ? (
              <ArticleRequirements
                newDocData={this.newDocData}
                toEdit={this.state.docToEdit}
                isEdit={this.props.isEdit}
              />
            ) : this.state.displayBlocks == "tech" ? (
              <TechRequirements
                newDocData={this.newDocData}
                toEdit={this.state.docToEdit}
                isEdit={this.props.isEdit}
              />
            ) : null}
          </div>
        </div>
        {this.state.displayBlocks != "" ? (
          <DynamicContent
            dynamicContent={this.dynamicContent}
            dynamicContentEdit={this.dynamicContentEdit}
            toEdit={this.state.docToEdit}
            isEdit={this.props.isEdit}
            path={this.state.path}
          />
        ) : null}
      </form>
    );
  }
}

export default CreateDocument;
