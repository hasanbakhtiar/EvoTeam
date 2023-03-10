
const blogState:any[] = [];

export const blogReducer = (state = blogState, action:any) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.blog];

    case "UPDATE_BLOG":
      return state.map((b) => {
        if (b.id === action.id) {
          return { 
            ...b, 
            ...action.update 
          };
        }else{
          return b;
        }
      });

    case "REMOVE_BLOG":
      return state.filter(({id})=>{
        return id !== action.id;
      });

    default:
      return state;
  }
};
