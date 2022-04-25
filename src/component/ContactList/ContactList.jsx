import css from './ContactList.module.css';
// import img from '../../image/img/photo_about_300.png';
function ContactList() {
  return (
    <>
      <div className={css.contact__container}>
        <p className={css.contact__container__pretitle}>Contacts</p>
        <h2 className={css.resume__container__title}>CONTACT ME</h2>
        
      </div>
    </>
  );
}

export default ContactList;
