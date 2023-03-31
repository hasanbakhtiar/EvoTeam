interface TodoListProps {
    items:{id:string, text:string}[];
    ondeleteTodo:(id:string)=>void;

}



const TodoList:React.FC<TodoListProps> = (props) => {
  return (
    <ul>
        {props.items.map((item)=>{
            return <li key={item.id}>
                <span>{item.text}</span><button onClick={props.ondeleteTodo.bind(null,item.id)}>del</button>
            </li>
        })}
    </ul>
  )
}

export default TodoList