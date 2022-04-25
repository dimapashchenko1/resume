import css from './Home.module.css';
import { Nav, Social } from "../indeх";
// import Social from '../Social';

function Home() {
  return (
    <div className={css.home__container}>
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