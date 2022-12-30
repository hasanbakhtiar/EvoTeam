import React, { Component } from 'react'
import photoOne from '../img/photo-one.jpeg'
import photoTwo from '../img/photo-two.jpg'
class BookApp extends Component {
    constructor(){
        super();
        this.state={
            bookCover:photoOne,
            bookName:"1984",
            bookAuther:"George Orwell",
            bookPageCount:300
        }
    }
    nextBook=()=>{
        this.setState({
            bookCover:photoTwo,
            bookName:"Cinayet ve Ceza",
            bookAuther:"Dostoyevski",
            bookPageCount:500
        })
    }

    prevBook=()=>{
        this.setState({
            bookCover:photoOne,
            bookName:"1984",
            bookAuther:"George Orwell",
            bookPageCount:300
        })
    }
  render() {
    return (
      <div>
        <div className="card" style={{width: '18rem'}}>
        <img src={this.state.bookCover} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{this.state.bookName}</h5>
            <p className="card-text">{this.state.bookAuther}</p>
            <p className="card-text">Page count:{this.state.bookPageCount} pg</p>
            <button onClick={this.nextBook} className="btn btn-warning me-3">Prev Book</button>
            <button onClick={this.prevBook} className="btn btn-warning">Next Book</button>
        </div>
        </div>

      </div>
    )
  }
}

export default BookApp