import React from 'react'
import './styles.css';

import { Todo } from '../model';
import SingleTodo from './SingleTodo';
type Props = {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC<Props> = ({todos,setTodos} : Props) => {
  return (
    <div className="container">
      <div className="todos">
        Active Tasks
      {todos.map((item) => (
        <SingleTodo todo={item} key={item.id} setTodos={setTodos} todos={todos} />
      ))}
      </div>
      <div className="todos remove">
      Completed Tasks
      {todos.map((item) => (
        <SingleTodo todo={item} key={item.id} setTodos={setTodos} todos={todos} />
      ))}
      </div>
    </div>
    
  )
}

export default TodoList