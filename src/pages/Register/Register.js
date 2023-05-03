import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterForm from './RegisterForm';

import { REGISTER_FORM_DATA } from './REGISTER_FORM_DATA';
import { api } from '../../api/config';
import './Register.css';

function Register() {
  const [registerInfo, setRegisterInfo] = useState({
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  });

  const navigate = useNavigate();
  const { firstName, lastName, emailAddress, password } = registerInfo;

  const validationInput = () => {
    const allText = firstName && lastName && emailAddress && password;

    if (!allText) {
      return false;
    } else {
      return true;
    }
  };

  const registerFetch = () => {
    if (validationInput()) {
      fetch(api.fetchSignup, {
        method: 'POST',
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: emailAddress,
          password: password,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message !== 'SUCCESS') {

          } else {
            navigate('/login');
          }
        });
    }
  };

  return (
    <div className="register">
      <div className="backgroundWrapper">
        <div className="registerWrapper">
          <h1 className='register-font'>센츠헤븐의 신규고객</h1>

          <div className="registerInputWrapper">
            <div className="firstNameWrapper">
              {REGISTER_FORM_DATA.map(data => (
                <RegisterForm
                  key={data.id}
                  list={data}
                  registerInfo={registerInfo}
                  setRegisterInfo={setRegisterInfo}
                />
              ))}
            </div>
          </div>

          <div className="buttonWrap">
            <button className="registerButton" onClick={registerFetch}>
              Register
            </button>
          </div>

          <p className='register-font'>
            할인쿠폰 및 혜택, 이벤트, 신상품 소식 등 쇼핑몰에서 제공하는 유익한 쇼핑정보를 SMS나 이메일로 받아보실 수 있습니다.

            단, 주문/거래 정보 및 주요 정책과 관련된 내용은 수신동의 여부와 관계없이 발송됩니다.

            선택 약관에 동의하지 않으셔도 회원가입은 가능하며, 회원가입 후 회원정보수정 페이지에서 언제든지 수신여부를 변경하실 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
