import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
 <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="https://github.com" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i> Github Finder</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
 
  </div>
</nav>

    )
  }
}

export default Header