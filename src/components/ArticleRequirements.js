import React, { Component } from "react";
import "./CreateDocument.scss";

class ArticleRequirements extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedTechType: "",
        };
        this.handleTechType = this.handleTechType.bind(this);
      }
      handleTechType(event){
        this.setState({selectedTechType:event.target.name})
      }

      
  render() {
      return(

          <React.Fragment>
          <div className="blockContainer">
            <div className="subtitleContainer">
              <h2 className="subtitle">Technology Type</h2>
              
            </div>
            <div className="colContainer">
              <div className="rowContainer">
              <input checked={this.state.selectedTechType=="Frontend"} name="Frontend" onChange={this.handleTechType} type="radio" />

                <label className="label" for="isArticle">
                  Frontend
                </label>
              </div>
              <div className="rowContainer">
              <input checked={this.state.selectedTechType=="Backend"}name="Backend" onChange={this.handleTechType} type="radio" />

                <label className="label" for="isArticle">
                  Backend
                </label>
              </div>
              <div className="rowContainer">
              <input checked={this.state.selectedTechType=="Mixed"}name="Mixed" onChange={this.handleTechType} type="radio" />

                <label className="label" for="isArticle">
                  Mixed
                </label>
              </div>
              <div className="rowContainer">
              <input checked={this.state.selectedTechType=="None"}name="None" onChange={this.handleTechType} type="radio" />

                <label className="label" for="isArticle">
                  None
                </label>
              </div>
            </div>
          </div>
          <div className="blockContainer">
            <div className="subtitleContainer">
              <h2 className="subtitle">Title</h2>
              
            </div>
            <div className="colContainer">
              <div className="rowContainer">
                <input type="text" className="lessWidth"/>
              </div>
            </div>
          </div>
          <div className="blockContainer">
            <div className="subtitleContainer">
              <h2 className="subtitle">Summary</h2>
              
            </div>
            <div className="colContainer">
              <div className="rowContainer">
                <input type="text" className="totalWidth"/>
              </div>
            </div>
          </div>
          <div className="blockContainer">
            <div className="subtitleContainer">
              <h2 className="subtitle">Technologies</h2>
              
            </div>
            <div className="colContainer">
              <div className="rowContainer lessMargin">
                <input type="text" className="lessWidth"/>
              </div>
              <div className="rowContainer lessMargin">
                <input type="text" className="lessWidth"/>
              </div>
              <div className="rowContainer lessMargin">
                <input type="text" className="lessWidth"/>
              </div>
              <div className="rowContainer lessMargin">
                <div className="addNewItem">
                <img src="/icon/plus.svg" className="plusImage"/>
                <span>ADD NEW TECHNOLOGY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="blockContainer">
            <div className="subtitleContainer">
              <h2 className="subtitle">Tags</h2>
              
            </div>
            <div className="colContainer">
              <div className="rowContainer lessMargin">
                <input type="text" className="lessWidth"/>
              </div>
              <div className="rowContainer lessMargin">
                <input type="text" className="lessWidth"/>
              </div>
              <div className="rowContainer lessMargin">
                <input type="text" className="lessWidth"/>
              </div>
              <div className="rowContainer lessMargin">
                <div className="addNewItem">
                <img src="/icon/plus.svg" className="plusImage"/>
                <span>ADD NEW TAG</span>
                </div>
              </div>
            </div>
          </div>
      </React.Fragment>
  )
  }
}

export default ArticleRequirements;