import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/Editor';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import style from './Maker.module.css';

const Maker = ({ authService }) => {
  const [card, setCard] = useState([
    {
      id: '1',
      name: 'kim young suk',
      company: 'Samsung',
      theme: 'light',
      title: 'Teacher',
      email: 'naver@gmail.com',
      message: 'go for it',
      filename: 'kkk'
    },
    {
      id: '2',
      name: 'kim min jun',
      company: 'LG',
      theme: 'light',
      title: 'student',
      email: 'naver@gmail.com',
      message: 'go for it',
      filename: 'kkk'
    },
    {
      id: '3',
      name: 'kim min gun',
      company: 'Seltrion',
      theme: 'light',
      title: 'mam',
      email: 'naver@gmail.com',
      message: 'go for it',
      filename: 'kkk'
    },

  ])

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
    <section className={style.maker}>
      <div className={style.header}>
        <Header onLogout={onLogout} />
      </div>
      <section className={style.main}>
        <div className={style.left}>
          <Editor card={card} />
        </div>
        <div className={style.right}>
          <Preview card={card} />
        </div>
      </section>
      <div className={style.footer}>
        <Footer />
      </div>
    </section>
  );
}

export default Maker;