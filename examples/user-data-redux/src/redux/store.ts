import { createStore } from "redux"
import { userReducer } from "./reducer";

const configureStore = ()=>{
    const store = createStore(userReducer)
    return store;
}

export default configureStore;