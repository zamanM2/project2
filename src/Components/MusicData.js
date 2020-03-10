import React, { Component } from 'react'

export default class MusicData extends Component {
constructor(){
    super()
    this.state = {
        s : ''
    }
}



getmusicData() {

    fetch(`theaudiodb.com/api/v1/json/1/search.php?s=${this.state.s}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
        this.setState({
           artists: data 
        })
      console.log(data);
    });
  
  }
    render() {
        return (
            <div className ="music">

            </div>
        )
    }
}
