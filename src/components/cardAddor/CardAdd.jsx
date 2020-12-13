import React, { useRef } from 'react';
import ImgFile from '../ImgFile';
import Button from '../Button';
import style from './cardAdd.module.css';

const CardAdd = ({ updateCard }) => {

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onsubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || '',
      company: companyRef.current.value || '',
      theme: themeRef.current.value || '',
      title: titleRef.current.value || '',
      email: emailRef.current.value || '',
      message: messageRef.current.value || '',
      filename: '',
      fileUrl: '',
    };
    formRef.current.reset();
    updateCard(card);
  }

  return (
    <form ref={formRef} className={style.form}>
      <input
        ref={nameRef} className={style.input} type="text" name="name" placeholder="name" />
      <input
        ref={companyRef} className={style.input} type="text" name="company" placeholder="company" />
      {/* select 태그는 태그안에 option 태그가 있어야 함 */}
      <select
        ref={themeRef} name="theme" placeholder="theme" className={style.select}>
        <option placeholder="light">light</option>
        <option placeholder="dark">dark</option>
        <option placeholder="colorfull">colorfull</option>
      </select>
      <input
        ref={titleRef} className={style.input} type="text" name="title" placeholder="title" />
      <input
        ref={emailRef} className={style.input} type="text" name="email" placeholder="email" />
      <textarea ref={messageRef} name="message" placeholder="message" className={style.textarea} ></textarea>
      <div className={style.fileInput}>
        <ImgFile />
      </div>
      <Button name='추가!!' onsubmit={onsubmit} className={style.button} />

    </form>
  );
}

export default CardAdd;