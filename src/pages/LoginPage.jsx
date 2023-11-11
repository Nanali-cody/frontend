import React, {useState} from 'react';
import '../styles/LoginPage.css';
import {Link} from  'react-router-dom';
import axios from 'axios'
function Login() {
    const [id, setid] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = (event) => {
      event.preventDefault();
      // 로그인 로직을 여기에 작성하세요.
    };
  
    const handleRegister = () => {
      // 회원가입 로직을 여기에 작성하세요.
    };
    const handleFindId = () => {
      // 아이디 / 비밀번호 찾기 로직을 여기에 작성하세요.
    };
    const handleWithoutLogin=()=>{
      //로그인없이 접속 로직
    }
  
  
    return (
      <div className="login">
        <img className='logo1' src={`${process.env.PUBLIC_URL}/assets/Union.svg`} alt="" />
        <img className='logo2' src={`${process.env.PUBLIC_URL}/assets/로고_1.svg`} alt="" />
        <div className='paragraph'>날씨별 옷차림이 고민되는 당신에게</div>
        <div className="findId" onClick={handleFindId}>아이디 / 비밀번호 찾기</div>
      
        <form onSubmit={handleLogin} className="form">
          <input type="id" value={id} onChange={(e) => setid(e.target.value)} placeholder="아이디" />
          <input type="passwordl" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" />
          <button type="login">로그인</button>
          <Link to ="/signup"style={{ textDecoration: "none" }}>
              <button type="signup">회원가입하기</button>
          </Link>
          <Link to ="/home"style={{ textDecoration: "none" }}>
              <div className='nologin' onClick={handleWithoutLogin}>회원가입 없이 둘러보기</div>
          </Link>
        </form>
      </div>
    );
  }
  
  export default Login;