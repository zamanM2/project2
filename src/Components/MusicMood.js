import React, { Component } from 'react'

export default class MusicMood extends Component {
    render(){
        return(
    
          <div className="artist-search"> Search Your Artist
          <form onSubmit= {this.props.getMusicdata}>
    
      <input value={this.props.strArtist} onChange={this.props.handleInputChange} type="text" name="ArtistName"/>
      <input type="submit" value="Submit"/>
      </form>
    
    </div>
    
          )
      }
}
