import { Header, ContactList } from "../indeх";
import css from './Contact.module.css';
// import Social from '../Social';

function Contact() {
  return (

<div className={css.contact__container}>
<div className={css.contact__header}><Header/></div>
<div className={css.contact__contactList}><ContactList/></div>
</div>

 
  )
}

export default Contact;