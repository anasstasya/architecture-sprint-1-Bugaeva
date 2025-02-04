import React, { lazy } from 'react';
import logoPath from '../images/logo.svg';

const AuthRoutes = lazy(() => import('auth/AuthRoutes').catch(() => {
  return { default: () => <div className="error">AuthRoutes component is not available</div> };
}));

function Header ({email, mainPath }) {
  return (
    <header className="header page__section">
      <img src={logoPath} alt="Логотип проекта Mesto" className="logo header__logo" />
      {/* additional routes may go here */}
      <AuthRoutes email={email} mainPath={mainPath}/>
    </header>
  );
}

export default Header;
