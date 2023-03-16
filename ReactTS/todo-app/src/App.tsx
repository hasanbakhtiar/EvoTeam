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
    const todoDeleteHandler =(todoId:string)=>{
      setTodos((prevTodo)=>{
        return prevTodo.filter((todo)=>
        todo.id !== todoId)
      })
    }
    
  return (
    <div className='App'>
        <NewTodo onAddTodo={todoAddHandler}/>
        <TodoList items={todos} ondeleteTodo={todoDeleteHandler}/>

    
    </div>
  )
}

export default App