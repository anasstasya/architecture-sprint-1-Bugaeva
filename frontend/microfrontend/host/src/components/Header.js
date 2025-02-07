import React, {lazy} from 'react';
import logoPath from '../images/logo.svg';

const UserHeaderControl = lazy(() => import('users/UserHeaderControl').catch(() => {
  return { default: () => <div className='error'>Component is not available!</div> };
 })
 ); 

// В корневом компоненте App описаны обработчики: onRegister, onLogin и onSignOut. Эти обработчики переданы в соответствующие компоненты: Register.js, Login.js, Header.js
function Header ({onSignOut, email }) {
  function handleSignOut(){
    onSignOut();
  }
  return (
    <header className="header page__section">
      <img src={logoPath} alt="Логотип проекта Mesto" className="logo header__logo" />
      <UserHeaderControl email={email} onSignOut={onSignOut} />
    </header>
  )
}

export default Header;
