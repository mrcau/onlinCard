import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import style from './Maker.module.css';


const Maker = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  }

  useEffect(() => {
    authService.onAuth(user => {
      !user && history.push('/');
    });
  });

  return (
    <section className={styleMedia.maker}>
      <Header onLogout={onLogout} />

      <Footer />
    </section>
  );
}

export default Maker;