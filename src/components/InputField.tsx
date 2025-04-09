import React, { useRef } from 'react'


type Props = {
    todo:string | number;
    setTodo:React.Dispatch<React.SetStateAction<string | number>>;
    handleAdd: (e:React.FormEvent) => void;
}

const InputField:React.FC<Props> = ({todo,setTodo,handleAdd} : Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className='input' onSubmit={(e) =>{
        handleAdd(e); 
        inputRef.current?.blur();
    } }>
        <input ref={inputRef} type="text" className='input__box' value={todo} onChange= {
            (e) => setTodo(e.target.value)
        } placeholder="Enter a task"/>
        <button className='input_submit' type='submit'>Add</button>
    </form>
  )
}

export default InputField