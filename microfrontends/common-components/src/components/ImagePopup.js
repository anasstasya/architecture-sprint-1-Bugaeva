import React from 'react';

import '../index.css';

function ImagePopup({ isOpen, name, link, onClose }) {
  return (
    <div className={`popup popup_type_image ${isOpen ? 'popup_is-opened' : ''}`}>
      <div className="popup__content popup__content_content_image">
        <button type="button" className="popup__close" onClick={onClose}></button>
        <img alt={name} src={link} className="popup__image" />
        <p className="popup__caption">{name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
