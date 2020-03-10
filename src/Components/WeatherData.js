import React, { Component } from 'react';


class WeatherData extends Component{
render() {
  return(
    <div className ="weather">

       Humidity={this.props.humidity}
        Pressure={this.props.pressure}
        Temperature={this.props.temperature}
        Name={this.props.name}

       </div>


      )
  }

}

export default WeatherData;
