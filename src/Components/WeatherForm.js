import React, { Component } from 'react';


class WeatherForm extends Component {
  render(){
    return(

      <div className="weather-form"> Enter Zipcode:
      <form onSubmit= {this.props.getweatherData}>

  <input value={this.props.zip} onChange={this.props.handleInputChange} type="text" name="ZipCode"/>
  <input type="submit" value="Submit"/>
  </form>

</div>

      )
  }


}

export default WeatherForm;