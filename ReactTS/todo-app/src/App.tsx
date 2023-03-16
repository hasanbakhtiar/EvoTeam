import React, { useState } from 'react'
import NewTodo from './components/NewTodo'
import TodoList from './components/TodoList'
import {Todo} from './todo.model'
const App = () => {
    const [todos,setTodos] = useState<Todo[]>([])

    const todoAddHandler = (text:string)=>{
            setTodos((prevTodos)=>[
                ...prevTodos,
                {id:Date.now().toString(), text:text}
            ])
    };
    
  return (
    <div className='App'>
        <NewTodo onAddTodo={todoAddHandler}/>
        <TodoList items={todos}/>

    
    </div>
  )
}

export default App