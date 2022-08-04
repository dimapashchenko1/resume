import css from './PortfolioList.module.css';
import webstudio from '../../image/img/webstudio.png';
import hellen from '../../image/img/hellen.png';
import filmoteka from '../../image/img/filmoteka.png';
import kapusta from '../../image/img/kapusta.png';
import myResume from '../../image/img/my-resume.png';
import Superhero from '../../image/img/superhero.png';
import Superhero_back from '../../image/img/superhero-back.png';
import Blog from '../../image/img/blog.png';
import finLeader from '../../image/img/finleader.png';

function PortfolioList() {
  return (
    <>
      <div className={css.portfolio__container}>
        <p className={css.portfolio__container__pretitle}>Portfolio</p>
        <h2 className={css.portfolio__container__title}>MY WORKS</h2>
        <ul className={css.portfolio}>
          <li className={css.portfolio__item}>
            <div className={css.portfolio__wrap}>
              <img
                src={webstudio}
                className={css.img__fluid}
                alt="Web Studio"
                width={260}
                height={240}
              />
              <div className={css.portfolio__info}>
                {/* <h4>Web Studio</h4> */}
                <div className={css.portfolio__links}>
                  <a
                    target="_blank"
                    rel='noreferrer'
                    href="https://dimapashchenko1.github.io/goit-markup-hw-08/"
                    className={css.portfolio__link}
                  >
                    Web Studio
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li className={css.portfolio__item}>
            <div className={css.portfolio__wrap}>
              <img
                src={hellen}
                className={css.img__fluid}
                alt="Hellen"
                width={260}
                height={240}
              />
              <div className={css.portfolio__info}>
                {/* <h4>Hellen</h4> */}
                <div className={css.portfolio__links}>
                  <a
                    target="_blank"
                    rel='noreferrer'
                    href="https://sepaev.github.io/reacteam-project"
                    className={css.portfolio__link}
                  >
                    Hellen
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li className={css.portfolio__item}>
            <div className={css.portfolio__wrap}>
              <img
                src={filmoteka}
                className={css.img__fluid}
                alt="Filmoteka"
                width={260}
                height={240}
              />
              <div className={css.portfolio__info}>
                {/* <h4>Filmoteka</h4> */}
                <div className={css.portfolio__links}>
                  <a
                    target="_blank"
                    rel='noreferrer'
                    href="https://sepaev.github.io/filmoteka/"
                    className={css.portfolio__link}
                  >
                    Filmoteka
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li className={css.portfolio__item}>
            <div className={css.portfolio__wrap}>
              <img
                src={kapusta}
                className={css.img__fluid}
                alt="Kapusta"
                width={260}
                height={240}
              />
              <div className={css.portfolio__info}>
                {/* <h4>Kapusta</h4> */}
                <div className={css.portfolio__links}>
                  <a
                    target="_blank"
                    rel='noreferrer'
                    href="https://pedantic-engelbart-4b98e1.netlify.app/"
                    className={css.portfolio__link}
                  >
                    Kapusta
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li className={css.portfolio__item}>
            <div className={css.portfolio__wrap}>
              <img
                src={myResume}
                className={css.img__fluid}
                alt="Resume"
                width={260}
                height={240}
              />
              <div className={css.portfolio__info}>
                {/* <h4>Resume</h4> */}
                <div className={css.portfolio__links}>
                  <a
                    target="_blank"
                    rel='noreferrer'
                    href="https://pdv-resume.netlify.app"
                    className={css.portfolio__link}
                  >
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li className={css.portfolio__item}>
            <div className={css.portfolio__wrap}>
              <img
                src={Superhero}
                className={css.img__fluid}
                alt="Superhero"
                width={260}
                height={240}
              />
              <div className={css.portfolio__info}>
                {/* <h4>Superhero</h4> */}
                <div className={css.portfolio__links}>
                  <a
                    target="_blank"
                    rel='noreferrer'
                    href="https://pdv-superheros-app.netlify.app/"
                    className={css.portfolio__link}
                  >
                    Superhero
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li className={css.portfolio__item}>
            <div className={css.portfolio__wrap}>
              <img
                src={Superhero_back}
                className={css.img__fluid}
                alt="Superhero-backend"
                width={260}
                height={240}
              />
              <div className={css.portfolio__info}>
                {/* <h4>Superhero-backend</h4> */}
                <div className={css.portfolio__links}>
                  <a
                    target="_blank"
                    rel='noreferrer'
                    href="https://github.com/dimapashchenko1/superheros-back"
                    className={css.portfolio__link}
                  >
                    Superhero-backend
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className={css.portfolio__item}>
            <div className={css.portfolio__wrap}>
              <img
                src={Blog}
                className={css.img__fluid}
                alt="Blog"
                width={260}
                height={240}
              />
              <div className={css.portfolio__info}>
                {/* <h4>Blog</h4> */}
                <div className={css.portfolio__links}>
                  <a
                    target="_blank"
                    rel='noreferrer'
                    href="https://dimapashchenko1.github.io/Blog"
                    className={css.portfolio__link}
                  >
                    Blog
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li className={css.portfolio__item}>
            <div className={css.portfolio__wrap}>
              <img
                src={finLeader}
                className={css.img__fluid}
                alt="Finance Leader"
                width={260}
                height={240}
              />
              <div className={css.portfolio__info}>
                {/* <h4>Finance Leader</h4> */}
                <div className={css.portfolio__links}>
                  <a
                    target="_blank"
                    rel='noreferrer'
                    href="https://fin-leader-land.netlify.app/"
                    className={css.portfolio__link}
                  >
                    Finance Leader
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default PortfolioList;
