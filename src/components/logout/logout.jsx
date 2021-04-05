import React from 'react'
import * as S from './logout.styled';
import { useDispatch } from 'react-redux';
import { signOutRequest } from '../../redux/auth/auth.actions';
const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signOutRequest())
  }

  return (
    <S.Button onClick={handleClick}>Logout</S.Button>
   );
}
 
export default Logout;