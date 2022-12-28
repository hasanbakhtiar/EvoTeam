import React, { Component } from 'react'
import SingleCard from './SingleCard'
import img from '../img/unsplash.jpg'
import img1 from '../img/unsplash1.jpg'

class CardList extends Component {
  render() {
    return (
      <div className='row g-5'>
        <SingleCard photo={img} title="perfect" desc="hello perfect programming language js "/>
        <SingleCard photo={img1} title="perfect" desc="hello perfect programming language js "/>
        <SingleCard />
        <SingleCard />
        <SingleCard />
        <SingleCard />
      </div>
    )
  }
}

export default CardList