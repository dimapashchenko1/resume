import css from './ContactList.module.css';
import React from 'react';
import svg from '../../image/svg/home.svg';
import { Social } from '../indeх';

function ContactList() {
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
          <form className={css.form} name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />
            <div className={css.form__row}>
              <label className={css.form__label} htmlFor="name"></label>
              <input
                className={css.form__input}
                name="name"
                placeholder="Name"
              />

              <label className={css.form__label} htmlFor="email"></label>
              <input
                className={css.form__input}
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>
            <div className={css.form__message}>
              <label className={css.form__label} htmlFor="message"></label>
              <textarea
                className={css.form__textarea}
                type="message"
                name="message"
                placeholder="Message..."
              />
            </div>
            <button type="submit" className={css.form__button}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactList;
