import React,{Component} from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// import Counter from './components/Counter';
// import BookApp from './components/BookApp';
import Login from './components/Login';

class App extends Component{
  render(){
    return(
      <div className='container mt-5'>
        <Login />
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

