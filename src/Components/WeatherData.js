import React, { Component } from 'react';


class WeatherData extends Component{
render() {
  return(
    <div>

       humidity={this.props.humidity};
        pressure={this.props.pressure};
        temperature={this.props.temperature};
        name={this.props.name};

       </div>


      )
  }

}

export default WeatherData;
