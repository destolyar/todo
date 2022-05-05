import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../store/slices/themeSlice';
import '../styles/components/header.scss'
import { RootState } from '../store/store';

export const Header = () => {
  let theme = useSelector((state: RootState) => state.themeSlice.theme)
  const dispatch = useDispatch()

  const themeSwitching = (payload: string) => {
    dispatch(changeTheme(payload))
  }

  return(
    <header className="header-container" style={(theme !== 'Light') ? {backgroundColor: "#2e2e2e", color: '#ffffff'} : {color: "#000000"}}>
      <div className="header-container__header">
        <Link className='header-container__header__route' to='/' style={(theme !== 'Light') ? {color: '#ffffff'} : {color: '#000000'}}>ToDo</Link>
        <Link className='header-container__header__route' to='history' style={(theme !== 'Light') ? {color: '#ffffff'} : {color: '#000000'}}>History</Link>
        <div className='header-container__header__theme-switcher' onClick={() => themeSwitching((theme === 'Light') ? 'Dark': 'Light')}>
          <img className='header-container__header__theme-switcher__image' src={(theme !== 'Light') ? './sun.png' : './moon.png'} alt="" />
        </div>
      </div>
    </header>
  )
}