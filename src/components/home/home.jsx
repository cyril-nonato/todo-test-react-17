import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import CustomInput from '../customInput/customInput';
import Logout from '../logout/logout';
import Todos from '../todos/todos';
import * as S from './home.styled';

const Home = (props) => {
  const creds = useSelector(state => state.auth.creds);
  
  const authenticated = useSelector(state => state.auth.authenticated);

  if(!authenticated) {
    return <Redirect to="/login" />
  }

  return ( 
    <S.Container>

      <S.InnerContainer>

        <S.NameAndLogout>

          {/* Name */}
          <S.Name>
            {
              `${creds.username}'s to do list`
            }
          </S.Name>

          {/* Logout button */}
          <S.ButtonContainer>
            <Logout />
          </S.ButtonContainer>
          
        </S.NameAndLogout>

        {/* Input field */}
        <CustomInput />

        {/* Todos List */}
        <Todos />

      </S.InnerContainer>

    </S.Container>
   );
}
 
export default Home;