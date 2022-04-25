import css from './Header.module.css';
import { Nav } from "../indeх";
// import Social from '../Social';

function Header() {
  return (
    <div className={css.header__container}>
     
    <h1 className={css.header__title}><a href="/">Dmytro Pashchenko</a></h1>
    
    <div className={css.header__nav}><Nav/></div>
    
    
    
    </div>
  )
}

export default Header;