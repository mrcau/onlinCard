import React from 'react';
import Card from '../card/Card';
import style from './preview.module.css';

const Preview = ({ card }) => (
  <section className={style.preview}>
    
    <h1>PREVIEW</h1>
    {
      card.map(card => <Card card={card}/>)
    }
  </section>
);

export default Preview;