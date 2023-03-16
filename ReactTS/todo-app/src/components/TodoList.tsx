interface TodoListProps {
    items:{id:string, text:string}[]

}



const TodoList:React.FC<TodoListProps> = (props) => {
  return (
    <ul>
        {props.items.map((item)=>{
            return <li key={item.id}>
                {item.text}
            </li>
        })}
    </ul>
  )
}

export default TodoList