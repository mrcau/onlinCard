import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import style from './App.module.css';
import Login from './components/login/Login';
import Maker from './components/Maker/Maker';

function App({authService}) {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Login authService={authService} />
          </Route>

          <Route path="/maker">
            <Maker authService={authService}/>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
