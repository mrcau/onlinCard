import React from 'react';
import style from './Header.module.css';

//로그인이 되었다면 로그아웃을 할 수 있는 콜백함수를 프롭스로 받아오기
//프
const Header = ({onLogout}) => 

  <header className={style.header}>
    {onLogout && 
      <button className={style.logout} onClick={onLogout}>
       Logout 
      </button> 
    }
    <img className={style.logo} src="/image/logo.png" alt=""/>
    
    <h1 className={style.title}>Card - Maker</h1>
  </header>

export default Header;