import React, { FormEventHandler, useState } from "react";
import { Button, Col, Form, InputGroup, ListGroup } from "react-bootstrap";
import { add } from "./features/todoSlice";
import { useAppDispatch, useAppSelector } from "./store";

const App = () => {
    const [title,setTitle] = useState("");
    const dispatch = useAppDispatch();
    const selectTodos = useAppSelector(state=>state.todos)
    const todoSubmit =(e:React.FormEvent)=>{
        e.preventDefault();
        dispatch(add(title));
        setTitle("");
    }
    
    
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="my-5">Todo App</h1>
        <Col className="col-4">
          <form onSubmit={todoSubmit}>
            <InputGroup className="mb-3">
              <Form.Control placeholder="add todo" onChange={(e)=>{setTitle(e.target.value)}} />
              <Button variant="secondary">Add</Button>
            </InputGroup>
          </form>
          <ListGroup>
            {selectTodos.map((item:any)=>(
                    <ListGroup.Item>{item.title}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </div>
    </>
  );
};

export default App;
