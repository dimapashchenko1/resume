// import React, {useState} from "react";
// import PropTypes from "prop-types";
// import axios from "axios";
// // import "./styles.css";

// /**
//  * @component Form
//  * @props - { object } -  config
//  */
// const Form = (props) => {
//   const [mailSent, setmailSent] = useState(false);
//   const [error, setError] = useState(null);
//   const [formData, setFormData] = useState({});

//   /**
//   * @function handleFormSubmit
//   * @param e { obj } - form event
//   * @return void
//   */
//   const handleFormSubmit = e => {
//     e.preventDefault();
//     axios({
//       method: "post",
//       // url: `${process.env.REACT_APP_API}`,
//       headers: { "content-type": "application/json" },
//       data: formData
//     })
//       .then(result => {
//         if (result.data.sent) {
//           setmailSent(result.data.sent)
//           setError(false)
//         } else {
//           setError(true)
//         }
//       })
//       .catch(error => setError( error.message ));
//   };
//   /**
//     * @function handleChange
//     * @param e { obj } - change event
//     * @param field { string } - namve of the field
//     * @return void
//     */
//    const handleChange = (e, field) => {
//     let value = e.target.value;
//     setFormData({
//       ...formData,
//       [field]: value,
//     });
//   };

//     const { title,description, successMessage, errorMessage, fieldsConfig } = props.config;
//     return (
//       <div className="contact-form">
//         <div className="contact-form__header">
//             <h2>{title}</h2>
//             <p>{description}</p>
//         </div>
//       <div className="contact-form__container">
//         <div>
//           <form action="#">
//             {fieldsConfig &&
//               fieldsConfig.map(field => {
//                 return (
//                   <React.Fragment key={field.id}>
//                     {field.type !== "textarea" ? (
//                       <React.Fragment>
//                         <label>{field.label}</label>
//                         <input
//                           type={field.type}
//                           className={field.klassName}
//                           placeholder={field.placeholder}
//                           value={field.name}
//                           onChange={e => handleChange(e, field.fieldName)}
//                         />
//                       </React.Fragment>
//                     ) : (
//                       <React.Fragment>
//                         <label>{field.label}</label>
//                         <textarea className={field.klassName} placeholder={field.placeholder} onChange={e => handleChange(e, field.fieldName)} value={field.name} />
//                       </React.Fragment>
//                     )}
//                   </React.Fragment>
//                 );
//               })}
//             <input type="submit" onClick={e => handleFormSubmit(e)} value="Submit" />
//             <div>
//               {mailSent && <div className="sucsess">{successMessage}</div>}
//               {error && <div className="error">{errorMessage}</div>}
//             </div>
//           </form>
//         </div>
//         </div>
//       </div>
//     );
// }

// export default Form;
// //propTypes for the component
// Form.propTypes = {
//   config: PropTypes.object.isRequired
// };










import css from './ContactList.module.css';
import React from "react";
import { useForm } from "react-hook-form";
import svg from '../../image/svg/home.svg';
import { Social } from "../indeх";

function ContactList() {

  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log("data :", data);
  console.log("hendle reg", handleRegistration);
  window.onload = async function (e) {
    // e.preventDefault();


    const form = document.getElementById('form')
    console.log("form :", form);
    // form.addEventListener("submit", formSend());





    let error = 0;

    let formData = new FormData(form);

    console.log('formData:', formData);

    if (error === 0) {
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData

      });
      console.log('response:', response);
      if (response.ok) {
        let result = await response.json();
        console.log('result:', result);

        alert(result.message);
        console.log('result.message:', result.message);

      } else {
        form.reset();
        alert("ERROR in response!")
      }
    } else {
      alert('Заполните обязательные поля!')
    }


  }
  return (
    <>
      <div className={css.contact__container}>
        <p className={css.contact__container__pretitle}>Contacts</p>
        <h2 className={css.contact__container__title}>CONTACT ME</h2>
        <div className={css.contact__info}>
          <div className={css.contact__tel}>
            <svg className={css.contact__icon} width="60" height="60">
              <use href={`${svg}#icon-tel`}></use>
            </svg>
            <div>
            <h3>Call Me</h3>
            <a href="tel:+380969022834">+380969022834</a>
            </div>
          </div>
          <div className={css.contact__social}>
            <svg className={css.contact__icon} width="60" height="60">
              <use href={`${svg}#icon-social`}></use>
            </svg>
            <div>
            <h3>Social Profiles</h3>
            <Social />
            </div>
          </div>

        </div>
        <div className={css.contact__form}>
          <form className={css.form} id='form' onSubmit={handleSubmit(handleRegistration)}>
            <div className={css.form__row}>
              <label className={css.form__label} htmlFor="name" ></label>
              <input className={css.form__input} name="name" placeholder='Name' {...register('name')} />

              <label className={css.form__label} htmlFor="email"></label>
              <input className={css.form__input} type="email" name="email" placeholder='Email' {...register('email')} />
            </div>
            <div className={css.form__message}>
              <label className={css.form__label} htmlFor="text" ></label>
              <textarea className={css.form__textarea} type="text" name="text" placeholder='Message' {...register('text')} />
            </div>
            <button className={css.form__button}>Send Message</button>
          </form>
        </div>
      </div>
    </>
  );

}

export default ContactList;


// <form action="" method='post' id="form" className={css.form}>

// <div className={css.form__item}>
//   <label htmlFor="formName" className={css.form__label}>Имя*:</label>
//   <input type="text" className={css.form__input} id="formName" name='name'/>
// </div>

// <div className={css.form__item}>
//   <label className={css.form__label} htmlFor="formEmail">E-mail*:</label>
//   <input type="text" className={css.form__input} id="formName" name='email' />
// </div>

// <div className={css.form__item}>
//   <label className={css.form__label} htmlFor="formMessage">Сообщение:</label>
//   <textarea type="text" className={css.form__input} id="formMessage" name='message' />
// </div>

// <button type="submit" className={css.form__button}>SEND MESSAGE</button>

// </form>