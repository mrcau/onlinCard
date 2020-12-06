import React from 'react';

const Card = ({ card }) => {
  const {id,name,company,title,email,message,theme,filename,fileurl}=card;
  const defaultIMG = '/image/default_logo.png';
  const url = fileurl || defaultIMG;
  return(
      <div>
        <img src={url} alt="face"/>
        <div>
          <h1>{name}</h1>
          <p>{company}</p>
          <p>{title}</p>
          <p>{email}</p>
          <p>{message}</p>
        </div>
      </div>
  );}

export default Card;