import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import InputForm from './InputForm';
import { LOGIN_FORM_DATA } from './LOGIN_FORM_DATA';
import { api } from '../../api/config';
import './Login.css'

function Login() {
  const navigate = useNavigate();
  const [loginInfo, setloginInfo] = useState({
    emailAddress: '',
    password: '',
  });

  const { emailAddress, password } = loginInfo;

  const loginFetch = () => {
    fetch(api.fetchLogin, {
      method: 'POST',
      body: JSON.stringify({
        email: emailAddress,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.token) {
          sessionStorage.setItem('loginToken', res.token);
          sessionStorage.setItem(
            'username',
            JSON.stringify(res.username.username)
          );
          navigate('/');
        }
        if (res.message !== 'SUCCESS') {
          alert([res.message]);
        }
        return;
      });
  };

  return (
    <div>
      <div className="backgroundWrapper">
        <div className="formWrapper">
          <h1 className='login-font'>로그인</h1>

          <div className="inputWrapper">
            {LOGIN_FORM_DATA.map(data => (
              <InputForm 
                key={data.id}
                list={data}
                loginInfo={loginInfo}
                setloginInfo={setloginInfo}
              />
            ))}
          </div>

          <div className="askSignup">
            <Link to="/Register">
              <br/>
              <button className='login-font'> 여기를 눌러 센츠헤븐 회원가입</button>
            </Link>
          </div>
          <br/>
          <div className="buttonWrap">
            <button className="loginButton" onClick={loginFetch} className='login-font'>
              로그인
            </button>
          </div>
          <p className='login-font'>
          아직 센츠헤븐의 회원이 아니신가요?
          <br/>
          회원가입하고 다양한 혜택과 서비스를 이용해 보세요!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
