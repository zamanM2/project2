import React, { Component } from 'react';
import './App.css';
import WeatherForm from './Components/WeatherForm';
import WeatherData from './Components/WeatherData';
import Home from './Components/Home';
import Activity from './Components/Activity';
import MusicMood from './Components/MusicMood';
import MusicData from './Components/MusicData';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
constructor() {

  super()
  this.state = {
    zip : "",
    temperature: "",
    isLoaded : false,
    weatherData: {}

         
  }
  this.handleInputChange= this.handleInputChange.bind(this)
  this.getweatherData= this.getweatherData.bind(this)

}

handleInputChange(event) {
  this.setState({
  zip: event.target.value,
  strArtist: event.target.value


  })
console.log(event.target.value)


}



  getweatherData(event) {
    event.preventDefault()
    fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${this.state.zip},us&appid=0c9464db3bd2d7a340b338814ef362fe`)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    this.setState({
      isLoaded: true,
      weatherData: {
      temperature: res.main.temp,
      humidity : res.main.humidity,
      pressure: res.main.pressure,
      name: res.name
      }

        })

  })

}


// getmusicData(event) {
//   event.preventDefault()
//   fetch(`theaudiodb.com/api/v1/json/1/search.php?s=${this.state.s}`)
// .then(res => res.json())
// .then(res => {
 
//   console.log(res);
//   this.setState({
//     isLoaded: true,
//     musicData: {
//     strArtist: res.artists.strArtist,
//     strMood : res.artists.strMood,
//     strBiographyEN: res.artists.strBiographyEN
    
//     }
    
//       })
//       console.log({res})

// })

// }





  render() {
    let onlyForHome =( <div> 
    <h1> Welcome to the Weather/Mood App! </h1>
    <WeatherForm
    /* creating the props here to connect it as a eventhandeler in weatherForm  */
    handleInputChange={this.handleInputChange}
    zip={this.state.zip}
    getweatherData={this.getweatherData}
     />
     <WeatherData


humidity = {this.state.weatherData.humidity}
pressure= {this.state.weatherData.pressure}
name= {this.state.weatherData.name}
temperature= {this.state.weatherData.temperature}


     />
     </div>
     )
      return (
        
        <div className="App">
          
         
      
      {/* music portion */}
      {/* <MusicMood
        handleInputChange={this.handleInputChange}
        s={this.state.s}
        getmusicData={this.getmusicData}


      />  */}
 
      {/* <MusicData 
      
        strArtist={this.state.musicData.strArtist}
        strMood={this.state.musicData.strMood}
        strBiographyEN={this.state.musicData.strBiographyEN}
      
      
      /> */}


      


<Router>
<div>
  <nav>
    <ul>
      
        <Link to="/">Home</Link>
      
     
        <Link to="/Activity">Activity</Link>
     
        <Link to="/MusicMood">MusicMood</Link>
      
    </ul>
  </nav>

  
  <Switch>
    <Route path="/MusicMood">
      <MusicMood />
    </Route>
    <Route path="/Activity">
      <Activity />
    </Route>
    <Route exact path="/">
      {onlyForHome}
      <Home />
    </Route>
  </Switch>
  {/* <Route exact path = "/">
    
  </Route> */}
</div>
</Router>
</div>
      );
    }





}

export default App;
