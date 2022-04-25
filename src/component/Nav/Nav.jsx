import { NavLink } from 'react-router-dom';
import css from './Nav.module.css';

  
function Nav () {
  return (
  <nav className={css.nav}>
    <ul className={css.nav__wrap}>
    <li className={css.nav__text}><NavLink className={({isActive}) =>`${isActive ? css.nav__link_selected : css.nav__link}`}  to="/">Home</NavLink></li>
    <li className={css.nav__text}><NavLink className={({isActive}) =>`${isActive ? css.nav__link_selected : css.nav__link}`}  to="/resume">Resume</NavLink></li>
    <li className={css.nav__text}><NavLink className={({isActive}) =>`${isActive ? css.nav__link_selected : css.nav__link}`}  to="/portfolio">Portfolio</NavLink></li>
    <li className={css.nav__text}><NavLink className={({isActive}) =>`${isActive ? css.nav__link_selected : css.nav__link}`}  to="/contacts">Contact</NavLink></li>
    </ul>
  </nav>
  );
}
export default Nav;