import {useRef} from 'react'
type NewTodoProps = {
    onAddTodo:(todoText:string) => void
}


const NewTodo:React.FC<NewTodoProps> = (props) => {

    const textInputRef = useRef<HTMLInputElement>(null);

    const todoSubmitHandler =(event:React.FormEvent)=>{
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        if(!enteredText){
            alert('fill input')
        }else{
            props.onAddTodo(enteredText)
        }
        
    }
    
  return (
    <form onSubmit={todoSubmitHandler}>
        <div >
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" ref={textInputRef}/>
        </div>
        <button type='submit'>Add todo</button>
    </form>
  )
}

export default NewTodo