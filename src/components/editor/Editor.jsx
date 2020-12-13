import React from 'react';
import CardAdd from '../cardAddor/CardAdd';
import CardEditor from '../cardeditor/CardEditor';
import style from './editor.module.css';
const Editor = ({ card, updateCard, deleteCard }) => (
  <section className={style.editor}>
    <h1>EDITOR</h1>
    {Object.keys(card).map(key => 
    <CardEditor key={key} card={card[key]} updateCard={updateCard} deleteCard={deleteCard}/>
    )}
    <CardAdd updateCard={updateCard} />
  </section>
);

export default Editor;