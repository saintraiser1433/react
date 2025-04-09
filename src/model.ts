import { useReducer } from "react";

export interface Todo {
    id:number;
    todo:string | number;
    isDone:boolean;
}


// type Actions = {
//     type: "ADD_TODO";
//     payload: Todo;
// } | {
//     type: "REMOVE_TODO";
//     payload: number;
// } | {
//     type: "DONE_TODO";
//     payload: number;
// } | {
//     type: "EDIT_TODO";
//     payload: {id:number; todo:string | number};
// }

// const TodoReducer = (state:Todo[],action:Actions) => {
//     switch(action.type) {
//         case "ADD_TODO":
//             return [...state, action.payload]
//         case "REMOVE_TODO":
//             return state.filter((todo) => todo.id !== action.payload)
//         case "DONE_TODO":
//             return state.map((todo) => todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo)
//         case "EDIT_TODO":
//             return state.map((todo) => todo.id === action.payload.id ? {...todo, todo: action.payload.todo} : todo)
//         default:
//             return state;
//     }

// }

// const ReducerExample = () => {
    
//   const [state,dispatch] = useReducer(TodoReducer,[])
//   return (
//     <div/>
//   )
// }

