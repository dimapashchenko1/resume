import css from './ResumeList.module.css';
import img from '../../image/img/photo_about_300.png';
function ResumeList() {
  return (
    <>
      <div className={css.resume__container}>
        <p className={css.resume__container__pretitle}>RESUME</p>
        <h2 className={css.resume__container__title}>LEARN MORE ABOUT ME</h2>
        <div className={css.resume__wrapper}>
          <div>
            <img
              className={css.resume__wrapper__img}
              src={img}
              alt="developer"
              width={300}
            />
          </div>
          <div className={css.resume__thumb__wrapper}>
            <h3 className={css.resume__title}>Junior Full Stack developer</h3>
            <p className={css.resume__text}>
              I am a Junior Full Stack developer. I focus on HTML, CSS3, JS,
              React, Node. Development, practice and work for theresult are
              important for me. I have practical experience working in a team. I
              am a fast learner, responsible, and ready for challenging tasks.
            </p>
            <div className={css.resume__thumb}>
              <ul className={css.resume__list}>
                <li className={css.resume__item}>
                  <pre className={css.resume__pre}></pre>
                  <strong>Birthday:</strong> <span>10 Dec 1996</span>
                </li>
                <li className={css.resume__item}>
                  <pre className={css.resume__pre}></pre> <strong>Phone:</strong>
                  <span>
                    <a href="tel:+380969022834">+380-96-90-22-834</a>
                  </span>
                </li>
                <li className={css.resume__item}>
                  <pre className={css.resume__pre}></pre> <strong>City:</strong>
                  <span>Kyiv, Ukraine</span>
                </li>
              </ul>

              <ul className={css.resume__list}>
                <li className={css.resume__item}>
                  <pre className={css.resume__pre}></pre> <strong>Age:</strong>
                  <span>25</span>
                </li>
                <li className={css.resume__item}>
                  <pre className={css.resume__pre}></pre>
                  <strong>Degree:</strong> <span>Master</span>
                </li>
                <li className={css.resume__item}>
                  <pre className={css.resume__pre}></pre> <strong>Email:</strong>
                  <span>
                    <a href="mailto:dimapashchenko1@gmail.com">
                      dimapashchenko1@gmail.com
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={css.education}>
          <div>
            <h3 className={css.education__title}>BASIC EDUCATION</h3>
            <ul className={css.education__list}>
              <li className={css.education__item}>
                <pre className={css.education__pre}></pre>
                <strong>
                  Kyiv National University of Technology and Design | 2018-2019
                </strong>
                
              </li>
              <li className={css.education__item}>
                <p>
                  Master | "Specialist in quality, standardization and
                  certification".
                </p>
              </li>
              <li className={css.education__item}>
                <pre className={css.education__pre}></pre>
                <strong>
                  Kyiv National University of Technology and Design | 2016-2018
                </strong>
                </li>
              <li className={css.education__item}>
                <p>Bachelor | "Technician in metrology".</p>
              </li>
              <li className={css.education__item}>
                <pre className={css.education__pre}></pre>
                <strong>
                  Kyiv Technical School of Electronic Devices | 2012-2016
                </strong>
              </li>
              <li className={css.education__item}>
                <p>Junior specialist | "Radio measurements".</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={css.education__title}>ADDITIONAL EDUCATION</h3>
            <ul>
              <li className={css.education__item}>
                <pre className={css.education__pre}></pre>
                <strong>
                IT School GoIT (Kyiv) | Jan 2021 - Feb 2022
                </strong>
                
              </li>
              <li className={css.education__item}>
                <p>
                Full Stack Developer
                </p>
              </li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeList;
