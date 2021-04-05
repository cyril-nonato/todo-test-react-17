import React, { useEffect, useState } from 'react'
import * as S from './login.styled';
import { useSelector, useDispatch } from 'react-redux';
import { signInRequest } from '../../redux/auth/auth.actions';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
  const authCreds = useSelector(state => state.auth.authCreds);

  const error = useSelector(state => state.auth.error);

  const message = useSelector(state => state.auth.message);

  const authenticated = useSelector(state => state.auth.authenticated);


  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const creds = {
      username,
      password
    };

    dispatch(signInRequest(creds));
  }

  useEffect(() => {
    const { username, password } = authCreds;

    const checkLocalUsername = localStorage.getItem("username");
    const checkLocalPassword = localStorage.getItem("password");

    // Persist users session if the creds is correct
    if(checkLocalPassword === password && checkLocalUsername === username) {
      dispatch(signInRequest(authCreds));
    }
  }, [dispatch, authCreds]);

  if(authenticated) {
    return <Redirect to="/" />
  }

  return ( 
    <S.Container>
    <S.InnerContainer>
      <S.Form onSubmit={handleSubmit}>
        <S.Input type="text" value={username} onChange={handleUsername} placeholder="Username" />
        <S.Input type="password" value={password} onChange={handlePassword} placeholder="Password" />
        <S.Button onSubmit={handleSubmit} type="submit">Login</S.Button>
      </S.Form>
      {
        error ?
        <S.Error>
          {
            message
          }
        </S.Error>
        : null
      }
    </S.InnerContainer>
    </S.Container>
   );
}
 
export default Login;