import React, { Component } from 'react'
import SingleCard from './SingleCard'

export class UserList extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row g-5">
          {this.props.uservalue.map((fd,i)=>(
            <SingleCard datauser = {fd} key={i}/>
          ))}
        </div>
      </div>
    )
  }
}

export default UserList