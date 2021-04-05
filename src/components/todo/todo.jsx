import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../redux/todos/todos.actions';
import * as S from './todo.styled';

const Todo = (props) => {
  const [showButton, setShowButton] = useState(false);

  const { item } = props;

  const dispatch = useDispatch();

  const handleDelete = () => {

    dispatch(deleteTodo(item.id))
  }

  return ( 
    <S.Container
    onMouseEnter={(e) => {
      setShowButton(true)
    }}

    onMouseLeave={(e) => {
      setShowButton(false)
    }}
  >
    <span>
      {
        item.name
      }
    </span>
    {
      showButton ?
      <S.ButtonContainer>
        <S.Button
          onClick={handleDelete}
        >
            Delete
        </S.Button>
      </S.ButtonContainer>
       : null
    }
  </S.Container>
   );
}
 
export default Todo;