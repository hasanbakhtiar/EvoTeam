import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        // this.decrement = this.decrement.bind(this); 
        // this.increment = this.increment.bind(this);
        this.state={
            count: 0
        }
    }


    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        <button className='btn btn-primary' onClick={()=>{
       if (this.state.count > 0) {
        this.setState({
            count:this.state.count-1
        })
       }
    }}>-1</button>
        <span className='mx-2'>{this.state.count}</span>
        <button className='btn btn-primary' onClick={this.increment}>+1</button>
      </div>
    )
  }
}

export default Counter