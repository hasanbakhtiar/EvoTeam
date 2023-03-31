import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {v4} from 'uuid';
interface Todo{
    id:string;
    title:string;
}

const initialState : Todo[] = [];

const todoSlice = createSlice({
    name:"todosApp",
    initialState,
    reducers:{
            add:(state,action:PayloadAction<string>)=>{
                const newTodo = {id:v4(), title: action.payload};
                state.push(newTodo);

            },
            remove:(state,action:PayloadAction<string>)=>{
                return state.filter(fd=>fd.id !== action.payload)

            }
    }
})

export default todoSlice.reducer;
export const {add,remove} = todoSlice.actions;