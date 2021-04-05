import React, { useState } from 'react';
import * as S from './customInput.styled';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../redux/todos/todos.actions';

const CustomInput = () => {
  const [todo, setTodo] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(todo) {
      dispatch(createTodo(todo))

      // Resets input value
      setTodo("")
    }
  }

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <S.Input value={todo} onChange={handleChange} />
        <S.Button type="submit">Add</S.Button>
    </S.FormContainer>
  )
}

export default CustomInput;