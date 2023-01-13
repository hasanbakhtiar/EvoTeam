import React, { Component } from 'react'

 class Search extends Component {
    constructor(){
        super();
        this.state={
            keyword:""
        }
    }
    inputValue =(e)=>{
        this.setState({
            keyword:e.target.value
        })
    }
    inputSubmit=(e)=>{
        e.preventDefault();
       if (this.state.keyword === "") {
        alert("please, enter username");
       }else{
        this.props.searchValue(this.state.keyword)
       }
    }
  render() {
    return (
      <form className='container my-5' onSubmit={this.inputSubmit}>
            <div className="input-group mb-3">

            <input onChange={this.inputValue} type="text" className="form-control" placeholder="Enter username"  />

            <button className="btn btn-outline-secondary" type="submit" ><i className="fa-sharp fa-solid fa-magnifying-glass"></i></button>
            </div>
            {/* {this.state.keyword} */}
      </form>
    )
  }
}

export default Search