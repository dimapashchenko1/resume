import css from './ContactList.module.css';
import React from "react";
import { useForm } from "react-hook-form";
import svg from '../../image/svg/home.svg';
import { Social } from "../indeх";

function ContactList() {

  const { register, handleSubmit } = useForm();
  // console.log("hendle reg", handleRegistration);
  const handleRegistration = (data) => console.log("data :", data);
  window.onload = async function (e) {
    // e.preventDefault();


    const form = document.getElementById('form')
    console.log("form :", form);
    // form.addEventListener("submit", formSend());
    
    let formData = new FormData(form);
    
    console.log('formData:', formData);

      let response = await fetch('../../../sendmail.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
      },
        body: JSON.stringify(formData) 

      });
      if (response.ok) {
        let result = await response.json();
        console.log('response:', response);
        console.log('result:', result);
        
        form.reset();
      } else {
        alert("ERROR in response!")
      }
    


  }
  return (
    <>
      <div className={css.contact__container}>
        <p className={css.contact__container__pretitle}>Contacts</p>
        <h2 className={css.contact__container__title}>CONTACT ME</h2>
        <div className={css.contact__info}>
          <div className={css.contact__tel}>
            <svg className={css.contact__icon} width="60" height="60">
              <use href={`${svg}#icon-tel`}></use>
            </svg>
            <div>
            <h3>Call Me</h3>
            <a href="tel:+380969022834">+380969022834</a>
            </div>
          </div>
          <div className={css.contact__social}>
            <svg className={css.contact__icon} width="60" height="60">
              <use href={`${svg}#icon-social`}></use>
            </svg>
            <div>
            <h3>Social Profiles</h3>
            <Social />
            </div>
          </div>

        </div>
        <div className={css.contact__form}>
          <form className={css.form} id='form' onSubmit={handleSubmit(handleRegistration)}>
            <div className={css.form__row}>
              <label className={css.form__label} htmlFor="name" ></label>
              <input className={css.form__input} name="name" placeholder='Name' {...register('name')} />

              <label className={css.form__label} htmlFor="email"></label>
              <input className={css.form__input} type="email" name="email" placeholder='Email' {...register('email')} />
            </div>
            <div className={css.form__message}>
              <label className={css.form__label} htmlFor="text" ></label>
              <textarea className={css.form__textarea} type="text" name="text" placeholder='Message' {...register('text')} />
            </div>
            <button  className={css.form__button}>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );

}

export default ContactList;