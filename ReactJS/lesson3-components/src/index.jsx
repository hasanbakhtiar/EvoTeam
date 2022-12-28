import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import CardList from './components/CardList';

class App extends Component{
  render(){
    return(
      <div className='container'>
      <h1 className='text-danger'>Hello</h1>
      <CardList />
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

