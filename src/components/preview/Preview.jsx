import React from 'react';
import Card from '../card/Card';
import style from './preview.module.css';

const Preview = ({ card }) => (
  <section className={style.preview}>
    
    <h1>PREVIEW</h1>
    {
      Object.keys(card).map(key => <Card key={key} card={card[key]}/>) // car[key]는 {}내용
    }
  </section>
);

export default Preview;