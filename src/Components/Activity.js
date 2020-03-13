import React, { Component } from 'react'
import Roll from 'react-reveal/Roll';



export default class Activity extends Component {

    
    

    render() {
        const {data} = this.props
        console.log(data)
        console.log('^')

            return (
                <Roll>
                <div>
                  {data.map((d,i) => {
                    return (
                        
                      <ul key={i}>
                        <li>{d.name}</li>
                        {d.location}
                        <li>{d.type}</li>
                      </ul>
                      
                    )
                  })}
                </div>
                </Roll>
              )
        }
}

// const styles= {
//     block: {
//         display: 'flex',
//         alignItems: 'center',
//         justifiyContent: 'center',
//         width: '100%',
//         height: '100%',
//         background: '#000',
//         borderBottom: '1px solid',
//     },
//     title:{
//         textAlign: 'center',
//         fontSize: 100,
//         color: '#fff',
//         fontFamily: 'Lato, sans-serif',
//         fontWeight:100,
//     },
// };

    

