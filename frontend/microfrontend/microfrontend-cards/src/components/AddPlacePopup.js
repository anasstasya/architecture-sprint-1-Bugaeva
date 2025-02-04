import React from 'react';
import { PopupWithForm } from 'shared-library';

function AddPlacePopup({ onAddPlace }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [link, setLink] = React.useState('');

  const handlePopupOpen = () => {
    setIsOpen(true);
  }

  const handlePopupClose = () => {
    setIsOpen(false);
  }

  React.useEffect(() => {
    addEventListener("_cards-add-place-popup-open", handlePopupOpen);
    return () => removeEventListener("_cards-add-place-popup-open", handlePopupOpen);
  }, []);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onAddPlace({
      name,
      link
    });
    handlePopupClose();
  }

  return (
    <PopupWithForm
      isOpen={isOpen} onSubmit={handleSubmit} onClose={handlePopupClose} title="Новое место" name="new-card"
    >
      <label className="popup__label">
        <input type="text" name="name" id="place-name"
               className="popup__input popup__input_type_card-name" placeholder="Название"
               required minLength="1" maxLength="30" value={name} onChange={handleNameChange} />
        <span className="popup__error" id="place-name-error"></span>
      </label>
      <label className="popup__label">
        <input type="url" name="link" id="place-link"
               className="popup__input popup__input_type_url" placeholder="Ссылка на картинку"
               required value={link} onChange={handleLinkChange} />
        <span className="popup__error" id="place-link-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
