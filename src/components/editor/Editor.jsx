import React from 'react';
import CardEditor from '../cardeditor/CardEditor';
import style from './editor.module.css';
const Editor = ({ card }) => (
  <section className={style.editor}>
    <h1>EDITOR</h1>
    {card.map((card) => {return(<CardEditor card={card}/>)
      
    })}
  </section>
);

export default Editor;