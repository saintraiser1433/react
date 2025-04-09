import React, { useEffect, useRef, useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdDone } from "react-icons/md";
import { Todo } from '../model';


type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}



const SingleTodo:React.FC<Props> = ({todo,todos,setTodos} : Props) => {

    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo,setEditTodo] = useState<string | number>(todo.todo);

   const handleDone = (id:number) => {
    setTodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
   }
   const handleDelete = (id:number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
   }

   const handleEdit = (todo:React.FormEvent,id:number) => {
    todo.preventDefault();
    setTodos(todos.map((t) => t.id === id ? {...t, todo: editTodo} : t))
    setEdit(false)
   }

   const inputRef = useRef<HTMLInputElement>(null);      


   useEffect(() => {
    inputRef.current?.focus();
   },[edit])
  return (
    <form className='todos__single' onSubmit={(e) => handleEdit(e,todo.id)}>
        {
            edit? (
                <input ref={inputRef} type="text" value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className="todos__single--text" />
            ) : ( 
                todo.isDone ? <s className="todos__single--text">{todo.todo}</s> : <span className="todos__single--text">{todo.todo}</span>
            )
        }


        <div>
            <span className="icon" onClick={() => {
                if(!edit && !todo.isDone) {
                    setEdit(!edit)
                }
            } 
             }><FaEdit/></span>
            <span className="icon" onClick={() => handleDelete(todo.id)}><MdDelete/></span>
            <span className="icon" onClick={() => handleDone(todo.id)}><MdDone/></span>
        </div>
    </form>
  )
}

export default SingleTodo