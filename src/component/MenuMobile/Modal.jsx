import React from "react";
import PropTypes from "prop-types";
import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
// import useModal from '../MenuMobile/useModal';
import svg from '../../image/svg/home.svg';

const modalRootRef = document.querySelector('#root');

function Modal({ handleBackdropClick, closeModal}) {
  
  
  return createPortal(
    <>
      {
        <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal__content}>
      <div className={css.modal__header}>
        <h2 className={css.nav__title}>DP</h2>
      <svg className={css.nav__close}  onClick= {closeModal} width="32" height="32">
        <use href={`${svg}#icon-close`}></use>
      </svg>
      </div>
      <nav className={css.nav}>
      
    <ul className={css.nav__wrap}>
    <li className={css.nav__text}><NavLink className={({isActive}) =>`${isActive ? css.nav__link_selected : css.nav__link}`}  to="/">Home</NavLink></li>
    <li className={css.nav__text}><NavLink className={({isActive}) =>`${isActive ? css.nav__link_selected : css.nav__link}`}  to="/resume">Resume</NavLink></li>
    <li className={css.nav__text}><NavLink className={({isActive}) =>`${isActive ? css.nav__link_selected : css.nav__link}`}  to="/portfolio">Portfolio</NavLink></li>
    <li className={css.nav__text}><NavLink className={({isActive}) =>`${isActive ? css.nav__link_selected : css.nav__link}`}  to="/contacts">Contact</NavLink></li>
    </ul>
  </nav>
      </div>
      </div>
      }
    </>,
    modalRootRef,
  );
};


Modal.propTypes = {
  text: PropTypes.string,
  closeModal: PropTypes.func,
  toLogout: PropTypes.func,
  handleBackdropClick: PropTypes.func,
};

export default Modal;