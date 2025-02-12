import React from 'react';
import SuccessIcon from '../images/success-icon.svg';
import ErrorIcon from '../images/error-icon.svg';

import '../index.css';

function InfoTooltip({ isOpen, onClose, isSuccess, infoMessage }) {
  const icon = isSuccess ? SuccessIcon : ErrorIcon
  
  return (
    <div className={`popup ${isOpen && 'popup_is-opened'}`}>
      <div className="popup__content">
        <form className="popup__form" noValidate>
          <button type="button" className="popup__close" onClick={onClose}></button>
            <div>
              <img className="popup__icon" src={icon} alt=""/>
              <p className="popup__status-message">{infoMessage}</p>
            </div>
        </form>
      </div>
    </div>
  );
}

export default InfoTooltip;

 