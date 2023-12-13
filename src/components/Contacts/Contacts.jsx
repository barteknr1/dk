import css from './Contacts.module.css'

const Contacts = () => {
  return (
    <div className={css.contacts}>
      <a href="tel:+48111111111">+48 111 111 111</a>
      <a href="mailto: mail@mail.com">info@mail.com</a>
    </div>
  )
}

export default Contacts