import React from "react";
import ReactDOM from "react-dom";
import "./sass/style.scss";
import monkey  from './img/unsplash.jpg'
class List extends React.Component {
  render() {
    return (
      <>
      
      <ol>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
        <li>list item</li>
      </ol>
      
     
      </>
    );
  }
}

class App extends React.Component {
  render() {
    return <>
    <h1>Hello</h1>
    <List/>
    <img width={300} src={monkey} alt="" />
    </>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
