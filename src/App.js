import React, { Component } from 'react';
import './App.css';
import WeatherForm from './Components/WeatherForm';
import WeatherData from './Components/WeatherData';
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
    weatherData: {

      }
  }
  this.handleInputChange= this.handleInputChange.bind(this)
  this.getweatherData= this.getweatherData.bind(this)
}

handleInputChange(event) {
  this.setState({
  zip: event.target.value


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





  render() {
      return (
        <
        <div className="App">
          <h1> Welcome to the WeatherApp! </h1>
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


<Router>
<div>
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/users">Users</Link>
      </li>
    </ul>
  </nav>

  {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
  <Switch>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/users">
      <Users />
    </Route>
    <Route path="/">
      <Home />
    </Route>
  </Switch>
</div>
</Router>

      );
    }





}

export default App;
