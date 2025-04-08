import React from 'react'
import './styles.css';

import { Todo } from '../model';
type Props = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC = ({todos,setTodos} : ) => {
  return (
    <div className='todos'>{ 
    }</div>
  )
}

export default TodoList