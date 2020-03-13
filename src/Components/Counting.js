import React from 'react';
import '../App.css';
import { connect } from 'react-redux'
import { MOODUP, MOODDOWN, RESET } from './Action';



function mapStateToProps( state ){
    return {
      count: state.count
    };
  }

class Counting extends React.Component {
        


  moodup = () =>{

    this.props.dispatch({type: MOODUP });
    }

    mooddown = () => {

        this.props.dispatch({ type: MOODDOWN });
    }

    reset = ()=>{
        this.props.dispatch({type:  RESET });
    }
    render(){
        return(
            <div className='card bg-light'>
                <h1>Mood Counter</h1>
                <div className='card-body'>
                    <button type="button" className="btn btn-lg" onClick={this.moodup}>+</button>
              
                    <button type="button" className="btn btn-lg" onClick={this.mooddown}>-</button>
                    <span className="count"> {this.props.count}</span>
                </div><div>

                <button type="button" className="btn btn-lg" id="reset " onClick={this.reset}>Reset</button>

                </div>
            </div>
                
        )

    }
}

export default connect(mapStateToProps)(Counting);
