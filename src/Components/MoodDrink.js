import React, { Component } from 'react'
import Roll from 'react-reveal/Roll';
export default class MoodDrink extends Component {
    render() {
        const {data} = this.props
        console.log(data)
        console.log('%')

            return (
                
                <div>
                  {data.map((a,i) => {
                    return (
                        <Roll>
                      <ul className = "mood" key={i}>
                        {a.name}
                        {a.tagline}
                        <img src ={a.image_url} height="400px" width ="200px" /> 
                        {a.description}
                      </ul>
                      </Roll>
                    )
                  })}
                </div>
                
              )
        }
}

