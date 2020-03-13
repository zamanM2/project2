import React, { Component } from 'react'
import Roll from 'react-reveal/Roll';
import Flip from 'react-reveal/Flip';


export default class Activity extends Component {

    
    

    render() {
        const {data} = this.props
        console.log(data)
        console.log('^')

            return (

                
                <div className = "basketball">
                  {/* takes in keys in value for parameter because its an array of objects 
                  will also create a duplicate array
                  */}

                  {data.map((d,i) => {
                    return (
                      <Flip left> 
                      <ul key={i}>
                        <li>{d.name}</li>
                        {d.location}
                        <li>{d.type}</li>
                      </ul>
                      </Flip>
                    )
                  })}
                </div>
                
              )
        }
}



    

