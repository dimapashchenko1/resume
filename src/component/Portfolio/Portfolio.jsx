import { Header, PortfolioList } from "../indeх";
import css from './Portfolio.module.css';
// import Social from '../Social';

function Portfolio() {
  return (

<div className={css.portfolio__container}>
<div className={css.portfolio__header}><Header/></div>
<div className={css.portfolio__portfolioList}><PortfolioList/></div>
</div>

 
  )
}

export default Portfolio;