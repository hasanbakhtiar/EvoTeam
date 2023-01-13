import React, { Component } from 'react'

class SingleCard extends Component {
    render() {
      const {login,avatar_url,html_url,node_id} = this.props.datauser;
    return (
     <div className="col-12 col-sm-6 col-md-3">
               <div className="card" >
        <img src={avatar_url} className="card-img-top" alt={login} />
        <div className="card-body">
            <h5 className="card-title">{login}</h5>
            <p className="card-text">{node_id}</p>
            <a href={html_url} className="btn btn-primary" target="_blank" rel="noreferrer">Go porfile</a>
        </div>
        </div>
     </div>

    )
  }
}

export default SingleCard