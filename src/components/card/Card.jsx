import React from 'react';
import style from './card.module.css';

const Card = ({ card }) => {
  // 프롭으로 받은 card 오브젝트를 디스트럭팅 하여 변수에 일괄적으로 담기
  const {id,name,company,title,email,message,theme,filename,fileurl}=card;
  // 오브젝트 정보에 이미지 주소가 없을 경우 사용할 디폴트 이미지 변수 정의
  const defaultIMG = '/image/default_logo.png'; 
  // 오브젝트에 이미지 fileurl 이 있다면 그대로 사용하고 없으면 defaultIMG 사용하기
  const url = fileurl || defaultIMG;

  const getStyle=(theme) => {
    switch(theme){
      case 'dark' : return style.dark;
      case 'light' : return style.light;
      case 'colorfull' : return style.colorfull;
      default : throw new Error('error:${theme}');
    }
  }
   return(
      <div className={`${style.card} ${getStyle(theme)}`}>
        <img className={style.avatar} src={url} alt="face"/>
        <div className={style.info}>
          <h1 className={style.name}>{name}</h1>
          <p className={style.company}> {company}</p>
          <p className={style.title}> {title}</p>
          <p className={style.email}> {email}</p>
          <p className={style.message}>{message}</p>
        </div>
      </div>
  );}

  
export default Card;