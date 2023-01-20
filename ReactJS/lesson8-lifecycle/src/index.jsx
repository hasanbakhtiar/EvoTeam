import React,{Component} from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


class List extends Component{
  componentWillUnmount(){
    alert('list deleted!')
  }
  render(){
      return(
        <ul>
          <li>React</li>
          <li>Redux</li>
          <li>TypeScript</li>
        </ul>
      )
  }
}



class App extends Component{
  // constructor(){
  //   super();
  //   this.state={
  //     count:0
  //   }
  //   console.log('constructor is running!');
  // }

  // componentDidMount(){
  //   console.log('componentDidMount is running!');
  // }

  // componentDidUpdate(){
  //   console.log('updated');
  //   document.querySelector('button').style.backgroundColor = 'red';
  // }

  state = {look:true,alert:""}

  removeList = () =>{
    this.setState({look:false,alert:'data deleted'})
  } 
  
  
  render(){
    let info;
    if (this.state.look) {
        info = <List />
    }
    return(
      <div className="container mt-5">
      {/* <h1>Hello</h1>
      <p>{this.state.count}</p>
        <button onClick={()=>{this.setState({
          count:this.state.count+1
        })}}>+1</button>
<hr /> */}
<h1>{this.state.alert}</h1>
        {info}
        <button onClick={this.removeList}>delete</button>
      </div>
    )
  }
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
