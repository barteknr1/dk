import { Link } from 'react-router-dom'
import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <>
      <nav className={css.nav}>
        <Link to="/">Strona główna</Link>
        <Link to="about">O nas</Link>
        <Link to="offer">Oferta</Link>
        <Link to="contact">Kontakt</Link>
      </nav>
    </>
  )
};

export default Navigation