import React from 'react';
import svg from '../../image/svg/home.svg';

import css from './Header.module.css';
import { Nav } from '../indeх';
import Modal from '../MenuMobile/Modal';
import useModal from '../MenuMobile/useModal';
function Header() {
  const { isShowingModal, toggle, handleBackdropClick } = useModal();
  return (
    <div className={css.header__container}>
      <h1 className={css.header__title}>
        <a href="/">Dmytro Pashchenko</a>
      </h1>

      <div className={css.header__nav}>
        <Nav />
      </div>
      <div className={css.header__modal}>
        <svg
          className={css.header__menu}
          onClick={() => toggle()}
          width="32"
          height="32"
        >
          <use href={`${svg}#icon-menu`}></use>
        </svg>
        {isShowingModal && (
          <Modal
            closeModal={toggle}
            handleBackdropClick={handleBackdropClick}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
