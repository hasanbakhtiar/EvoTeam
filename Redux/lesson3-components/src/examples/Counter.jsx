

const initialState = {count:0}

// Action Start
const inc=()=>({
    type:"INCREMENT"
})

const dec=()=>({
  type:"DECREMENT"
})
// Action End


// Reducer Start
const counterReducer = (state=initialState,action)=>{
  switch(action.type){
      case "INCREMENT":
        return {count:state.count + 1}
      case "DECREMENT":
        return {count:state.count - 1}
      default :
      return {count:state.count}
  }
}
// Reducer End

// Store Start
const store = createStore(counterReducer)
// Store End

store.subscribe(()=>{
  console.log(store.getState());
})

store.dispatch(inc())
store.dispatch(inc())
store.dispatch(dec())
store.dispatch(inc())
store.dispatch(inc())
