import svg from '../../image/svg/home.svg';
import css from './Social.module.css';

function Social() {
  return (
    <div className={css.social}>
      <a
        href="https://www.instagram.com/dimonchik_pashchenko"
        className={css.social__link}
        target="_blank"
        rel="noreferrer"
      >
        <svg className={css.social__icon} width="22" height="22">
          <use href={`${svg}#icon-instagram`}></use>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/dmytro-pashchenko-developer"
        className={css.social__link}
        target="_blank"
        rel="noreferrer"
      >
        <svg className={css.social__icon} width="22" height="22">
          <use href={`${svg}#icon-linkedin`}></use>
        </svg>
      </a>
      <a
        href="https://github.com/dimapashchenko1"
        className={css.social__link}
        target="_blank"
        rel="noreferrer"
      >
        <svg className={css.social__icon} width="22" height="22">
          <use href={`${svg}#icon-github`}></use>
        </svg>
      </a>
    </div>
  );
}
export default Social;
