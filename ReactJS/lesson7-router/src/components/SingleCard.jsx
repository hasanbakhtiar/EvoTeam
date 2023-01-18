import React, { Component } from "react";

class SingleCard extends Component {
  render() {
    return (
<div className="col-12 col-sm-6 col-md-4">
<div className="card" >
  <img  height={300} src={this.props.photo} className="card-img-top" alt={this.props.title} />
  <div className="card-body">
    <h5 className="card-title">{this.props.title.substring(0,10)}</h5>
    <p className="card-text">{this.props.desc.substring(0,30)}...</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

    );
  }
}

export default SingleCard;
