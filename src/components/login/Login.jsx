import React from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import style from './login.module.css';

const Login = ({authService}) => {
  const onLogin = (event) => {
    authService.login(event.currentTarget.textContent).then(console.log);
  }
  return (
    <section className={style.login}>
      <Header/>
      <section>
        <h1>Login</h1>
          <div className={style.list}>
            <button onClick={onLogin} className={style.btn}>Google</button>
            <button onClick={onLogin} className={style.btn}>Github</button>
          </div>
      </section>
      <Footer/>
    </section>
  );
}

export default Login;

