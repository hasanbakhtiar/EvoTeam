import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { addUser } from './redux/action';
import configureStore from './redux/store';

const store = configureStore();


const App= ()=>{
  const dispatch = useDispatch();
  const userdata:any = useSelector(state=>state);
const addNewUser=()=>{
  dispatch(addUser({id:1,name:"Jone",surname:"Morgan",age:40}))
}
    return(
      <>
       <button onClick={addNewUser}>dispatch</button>
<ol>
{userdata.map((item:any,i:number)=>{
  return <li key={i}>{item.name}</li>
})}
</ol>
     
      
      </>
    )
}



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
   <Provider store={store}>
    <App/>
   </Provider>
  </React.StrictMode>
);
