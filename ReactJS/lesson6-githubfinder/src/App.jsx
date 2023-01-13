import { Component } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import axios from "axios";
import UserList from "./components/UserList";

class App extends Component {
  constructor(){
    super();
    this.state={
      users:[]
    }
  }
  searchUser =(keyword)=>{
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then(res=>this.setState({users:res.data.items}))
    .catch(err=>console.log(err))
  }
  render() {
    return (
        <>
        {console.log(this.state.users)}
          <Header />
          <Search  searchValue={this.searchUser}/>
          {this.state.users.length === 0 ? <h1 className="text-center">No User</h1> : <UserList uservalue={this.state.users}/>}
        </>
    );
  }
}

export default App;
