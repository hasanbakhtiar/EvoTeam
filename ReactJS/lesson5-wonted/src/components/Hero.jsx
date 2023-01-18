import React, { Component } from "react";
import Header from "./Header";
import herophoto from "../img/hero.png";
export class Hero extends Component {
  render() {
    return (
      <div className="hero pb-5">
        <Header />

        <div className="circle x1"></div>
        <div className="circle x2"></div>
        <div className="circle x3"></div>
        <div className="circle x4"></div>
        <div className="circle x5"></div>
        
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <p className="mt-5"> LET'S MAKE THE BEST INVESTMENT</p>
              <h2 className="mt-5">There Is No Friend As Loyal As A Book</h2>
              <p className="mt-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
                harum quibusdam, assumenda quia explicabo.
              </p>
              <div className="input-group mb-3 mt-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  Button
                </button>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <img src={herophoto} alt="" />
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Hero;
