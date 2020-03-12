import React, { Component } from 'react'

export default class Activity extends Component {

    
    

    render() {
        const {data} = this.props
        console.log(data)
        console.log('^')

            return (
                <div>
                  {data.map((d,i) => {
                    return (
                      <ul key={i}>
                        <li>{d.name}</li>
                        <li>{d.location}</li>
                        <li>{d.type}</li>
                      </ul>
                    )
                  })}
                </div>
              )
        }
}
    

