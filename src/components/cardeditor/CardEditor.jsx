import React, { useRef } from 'react';
import ImgFile from '../ImgFile';
import Button from '../Button';
import style from './cardeditor.module.css';
const CardEditor = ({ card, updateCard, deleteCard }) => {

  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const {
    id, name, company, title, email,
    message, theme, filename, fileurl } = card;
  const onChange = (e) => {
    if (e.currentTarget == null) { return };
    e.preventDefault();
    updateCard({ ...card, [e.currentTarget.name]: e.currentTarget.value, });
  } // 오브젝트에서 뒤에 같은 ID이름의 값이 오면 앞의 ID값이 뒤에 값으로 덮힘.
  const onsubmit = (e) => { e.preventDefault(); }
  return (
    <form ref={formRef} onChange={onChange} className={style.form}>
      <input ref={nameRef} onChange={onChange} className={style.input} type="text" name="name" value={name} />
      <input ref={companyRef} onChange={onChange} className={style.input} type="text" name="company" value={company} />
      {/* select 태그는 태그안에 option 태그가 있어야 함 */}
      <select ref={themeRef} onChange={onChange} name="theme" value={theme} className={style.select}>
        <option value="light">LIGHT</option>
        <option value="dark">Dark</option>
        <option value="colorful">Color</option>
      </select>
      <input ref={titleRef} onChange={onChange} className={style.input} type="text" name="title" value={title} />
      <input ref={emailRef} onChange={onChange} className={style.input} type="text" name="email" value={email} />
      <textarea ref={messageRef} onChange={onChange} name="message" value={message} className={style.textarea} ></textarea>
      <div className={style.fileInput}>
        <ImgFile />
      </div>
      <Button name='삭제!' onsubmit={onsubmit} className={style.button} />

    </form>
  );
}

export default CardEditor;