import React, { Component } from 'react'

export default class MusicForm extends Component {
    constructor(){
        super()
        this.handleInputChange= this.handleInputChange.bind(this)
    }
    handleInputChange(event) {
        
      console.log("test")
      
      
      }
    render(){
    
        return(
    
          <div className="artist-search"> <h1>Search Your Artist</h1>
          <form onSubmit= {this.props.getmusicData}>
    
      <input value={this.props.s} onChange={this.props.handleInputChange} type="text" name="ArtistName"/>
      <input type="submit" value="Submit"/>
      </form>
    
    </div>
    
          )
      }
}
