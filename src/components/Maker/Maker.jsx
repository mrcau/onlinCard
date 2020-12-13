import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from '../editor/Editor';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Preview from '../preview/Preview';
import style from './Maker.module.css';

const Maker = ({ authService }) => {
  const [card, setCard] = useState({
    1:{
      id: '1',
      name: 'kim young suk',
      company: 'Samsung',
      theme: 'light',
      title: 'Teacher',
      email: 'naver@gmail.com',
      message: 'go for it',
      filename: null
    },
    2:{
      id: '2',
      name: 'kim min jun',
      company: 'LG',
      theme: 'dark',
      title: 'student',
      email: 'naver@gmail.com',
      message: 'go for it',
      filename: null
    },
    3:{
      id: '3',
      name: 'kim min gun',
      company: 'Seltrion',
      theme: 'colorfull',
      title: 'mam',
      email: 'naver@gmail.com',
      message: 'go for it',
      filename: null
    },
  })

  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  }
  useEffect(() => {
    authService.onAuth(user => {
      !user && history.push('/');
    });
  });

  // const addCard = (e) => {
  //   const updated = [...card,e]
  //   setCard(updated);
  // }
  const updateCard = (e) => {
    setCard(card => {
      const updated = {...card};
      updated[e.id] = e;
      return updated
    }); 

  //updated 전체기존 오브젝트에서 받아온[e.id] 키값(1,2,3..)과
  // 일치하는 기존 카드 value값을 받아온 e 값으로 대체
  //   const updated = {...card};
  //   updated[e.id] = e;
  //  setCard(updated); 
  }
  const deleteCard = (e) => {
    // console.log(e)
  }

  return (
    <section className={style.maker}>
      <div className={style.header}>
        <Header onLogout={onLogout} />
      </div>
      <section className={style.main}>
        <div className={style.left}>
          <Editor card={card} updateCard={updateCard} deleteCard={deleteCard}/>
        </div>
        <div className={style.right}>
          <Preview card={card}  />
        </div>
      </section>
      <div className={style.footer}>
        <Footer />
      </div>
    </section>
  );
}

export default Maker;