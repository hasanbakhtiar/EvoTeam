import { type } from "os";




const userData:any[] = [];

export const userReducer = (state = userData, action:any)=>{
        switch(action.type){
            case 'add_user':
            return [...state, action.userdata]
              
            default:
               return state;
        }
}