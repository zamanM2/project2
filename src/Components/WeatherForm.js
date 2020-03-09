import React, { Component } from 'react';
import WeatherForm from './Components/WeatherForm';


class WeatherForm extends Component {
  render(){
    return(

      <div className="weather-form"> This is the form
      <form >

  
  <input type="submit" value="Submit"/>
  </form>

</div>

      )
  }


}

export default WeatherForm;