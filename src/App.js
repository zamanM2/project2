import React, { Component } from 'react';
import './App.css';
import WeatherForm from './Components/WeatherForm';
import WeatherData from './Components/WeatherData';
import Home from './Components/Home';
import Activity from './Components/Activity';
import MoodDrink from './Components/MoodDrink';
import MusicMood from './Components/MusicMood';
// import MusicData from './Components/MusicData';
import Counting from './Components/Counting';
import Action from './Components/Action';
import Roll from 'react-reveal/Roll';
import { createStore } from 'redux'
import {Provider} from 'react-redux'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const initialState ={
  count:0
}

function reducer(state = initialState, action){
  console.log(state, action) 
  // while(state < 10){
  //   alert('You seem sad')
  // }
  switch(action.type) {
    case 'MOODUP':
      return {
        count: state.count + 1
      };
    case 'MOODDOWN':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
  
}


 // we need to create a store to hold the state.
const store = createStore(reducer)
// An action is Redux-speak for a plain object with a property called type.
// Redux has a built-in function called dispatch. Call it with an action, and Redux will call your reducer
//  with that action (and then replace the state with whatever your reducer returned).
store.dispatch({ type: "MOODUP" });
store.dispatch({ type: "MOODDOWN" });
store.dispatch({ type: "RESET" });
console.log(store)




class App extends Component {
constructor() {

  super()
  this.state = {
    zip : "",
    temperature: "",
    isLoaded : false,
    weatherData: {},
    parkData: [],
    musicData: " ", 
    drinkData: []

         
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
      name: res.name,
      // description: res
      }

        })

  })

}

getDrinkData() {
  fetch(`https://api.punkapi.com/v2/beers`)
  .then(res => res.json())
  .then(res => {
    console.log(res);
    this.setState({
      isLoaded: true,
      drinkData: res
  
        })
        
  })
  
  }
  
  


getParkData() {
fetch(`https://data.cityofnewyork.us/resource/e4ej-j6hn.json`)
.then(res => res.json())
.then(res => {
  // console.log(res);
  this.setState({
    isLoaded: true,
    parkData: res

      })
      
})

}

componentDidMount(){
  this.getParkData()
  this.getDrinkData()
}


getmusicData(event) {
  event.preventDefault()
  fetch(`theaudiodb.com/api/v1/json/1/search.php?s=${this.state.s}`)
.then(res => res.json())
.then(res => {
 
  console.log(res);
  this.setState({
    isLoaded: true,
    musicData: {
    strArtist: res.artists.strArtist,
    strMood : res.artists.strMood,
    strBiographyEN: res.artists
    
    }
    
      })
      console.log({res})

})

}



render() {
    let onlyForHome =( <div id="container"> 
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

    <Provider store={store}>
    <Counting />
    </Provider>

         
      
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
<div className = "nav">
  <nav>
    <ul>
      
        <Link to="/">Home</Link>
      
     
        <Link to="/Activity">Activity</Link>
     
        <Link to="/MusicMood">MusicMood</Link>

        <Link to="/MoodDrink">MoodDrink</Link>
      
      
    </ul>
  </nav>

  
  <Switch>
  <Route path="/MoodDrink">
      <MoodDrink data={this.state.drinkData}/>
    </Route>
    <Route path="/MusicMood">
      <MusicMood />
    </Route>
    <Route path="/Activity">
      <Activity data={this.state.parkData}/>
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
