import css from './Home.module.css';
import { Nav, Social } from "../indeх";
import React from 'react';
import svg from '../../image/svg/home.svg';

import Modal from '../MenuMobile/Modal';
import useModal from '../MenuMobile/useModal';

function Home() {
  const { isShowingModal, toggle, handleBackdropClick } = useModal();
  return (
    <div className={css.home__container}>
      <div className={css.home__modal}>
    <svg className={css.home__menu}  onClick={() => toggle()} width="32" height="32">
        <use href={`${svg}#icon-menu`}></use>
      </svg>
    {isShowingModal && (
          <Modal
            closeModal={toggle}
            handleBackdropClick={handleBackdropClick}
          />
        )}
    </div>
      <div className={css.home}>
      
    <h1 className={css.home__title}>Dmytro Pashchenko</h1>
    <p className={css.home__text}>I am a Junior Full Stack developer from Kiev, Ukraine</p>
    <div className={css.home__nav}><Nav/></div>
    <div className={css.home__social}><Social/></div>
    
    </div>
    </div>
  )
}

export default Home;