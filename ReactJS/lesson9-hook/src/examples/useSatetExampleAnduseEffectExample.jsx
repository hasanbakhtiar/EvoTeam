const App = () => {
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("useEffect is running!");
    },[count    ])
    
    
    const increment = ()=>{
        setCount(count+1)
    }

  return (
    <div className='container mt-5'>
        <button className='btn btn-primary' onClick={()=>{
            if (count>0) {
                setCount(count-1)
            }
            
            
        }}>-1</button>
        <span className='mx-3'>{count}</span>
        <button className='btn btn-primary' onClick={increment}>+1</button>
    </div>
  )
}