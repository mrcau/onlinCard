import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AuthService from './service/auth_service';

const authService = new AuthService();
// import 에서 가져온 이름과 변수이름 같으면 안됨
// const AuthService = AuthService 이렇게하면 X

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService}/>
  </React.StrictMode>,
  document.getElementById('root')
);