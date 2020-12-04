import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import style from './login.module.css';

const Login = ({authService}) => {
  const history = useHistory();
  const gotoMaker = (userId) => {
    history.push({
      pathname : '/maker',
      state : {id : userId}
    });
  }
  
  const onLogin = (event) => {
    authService
    .login(event.currentTarget.textContent)
    .then(data=> gotoMaker(data.user.uid));
  }

  useEffect(() => {
    authService.onAuth(user=>{
      user && gotoMaker(user.uid)
    })
  })

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

