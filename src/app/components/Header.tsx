import {Link} from 'react-router-dom';
import '../styles/components/header.scss'

export const Header = () => {
  return(
    <header className="header-container">
      <div className="header-container__header">
        <Link className='header-container__header__route' to='/'>ToDo</Link>
        <Link className='header-container__header__route' to='history'>History</Link>
        <div className='header-container__header__theme-switcher'>
          <img className='header-container__header__theme-switcher__image' src="./moon.png" alt="" />
        </div>
      </div>
    </header>
  )
}