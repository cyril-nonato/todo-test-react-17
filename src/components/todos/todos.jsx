import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../todo/todo';
import * as S from './todos.styled';

const Todos = () => {
  const todos = useSelector(state => state.todos.list)

  return ( 
    <S.Container>
      {
        todos.length ?
        todos.map(item => {
          return <Todo key={item.id} item={item} />
        }) : null
      }
    </S.Container>
   );
}
 
export default Todos;
