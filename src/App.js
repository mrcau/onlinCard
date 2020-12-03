import React from 'react'
import style from './App.module.css';
import Login from './components/login/Login';

function App({authService}) {
  return (
    <div className={style.App}>
      <Login authService={authService} />
    </div>
  );
}

export default App;