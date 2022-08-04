import { Header, ResumeList } from '../indeх';
import css from './Resume.module.css';

function Resume() {
  return (
    <div className={css.resume__container}>
      <div className={css.resume__header}>
        <Header />
      </div>
      <div className={css.resume__resumeList}>
        <ResumeList />
      </div>
    </div>
  );
}

export default Resume;
