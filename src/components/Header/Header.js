import logo from '../../images/logo_white.svg';
import { Link, useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem('jwt');
    navigate('/sign-in', { replace: true });
    props.loggedIn.setLoggedIn(false);
    props.userInfo.setUserInfo({});
  }

  return (
    <header className="header position-center">
      <img src={logo} alt="логотип" className="header__logo" />
      <div className='header__text-container'>
        {props.userInfo.userInfo.email && <p className='header__mail'>{props.userInfo.userInfo.email}</p>}
        {
          props.loggedIn.loggedIn
            ? <button onClick={signOut} className="header__link">Выйти</button>
            : <Link to={props.currentRoute === "/sign-in" ? "/sign-up" : "/sign-in"} className="header__link">{props.currentRoute === "/sign-in" ? "Регистрация" : "Войти"}</Link>
        }
      </div>
    </header>
  )
}
export default Header;