import React, { Component } from "react";
import logo from '../img/wonted-logo.png'
const menutitle = [
  "Home",
  "Benefits",
  "Chapters",
  "Pricing",
  "Author",
  "Achievements",
  "Reviews",
  "Contact",
];

class MenuItem extends Component {
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          {this.props.menutitle}
        </a>
      </li>
    );
  }
}

class Header extends Component {
  render() {
    return (
     <div className="container p-4">
         <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {menutitle.map((item)=>(<MenuItem menutitle={item}/>))}
            </ul>
          </div>
        </div>
      </nav>
     </div>
    );
  }
}

export default Header;
