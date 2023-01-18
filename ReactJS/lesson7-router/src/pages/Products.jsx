import React, { Component } from "react";
import SingleCard from "../components/SingleCard";
import axios from "axios";
export class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  }
  render() {
    return (
      <>
        <h1 className="text-center">Product List</h1>
        {this.state.products.length === 0 ? <h1>Loading...</h1>:    <div className="row g-5">
        {this.state.products.map((fd, i) => (
          <SingleCard photo={fd.image} title={fd.title} desc={fd.description}/>
        ))}
        </div>}
      </>
    );
  }
}

export default Products;
