import React from 'react';
import { CurrentUserContext, PopupWithForm } from 'shared-library';
import api from '../utils/api';

function EditProfilePopup({ onUserUpdate }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');

  const handlePopupOpen = () => {
    setIsOpen(true);
  }

  const handlePopupClose = () => {
    setIsOpen(false);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    if (currentUser) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [currentUser]);

  React.useEffect(() => {
    addEventListener("_profiles-edit-profile-popup-open", handlePopupOpen);
    return () => removeEventListener("_profiles-edit-profile-popup-open", handlePopupOpen);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    api
      .setUserInfo({
        name,
        about: description,
      })
      .then((newUserData) => {
        onUserUpdate(newUserData);
        handlePopupClose();
      })
      .catch((err) => console.log(err));
  }

  return (
    <PopupWithForm
      isOpen={isOpen} onSubmit={handleSubmit} onClose={handlePopupClose} title="Редактировать профиль" name="edit"
    >
      <label className="popup__label">
        <input type="text" name="userName" id="owner-name"
               className="popup__input popup__input_type_name" placeholder="Имя"
               required minLength="2" maxLength="40" pattern="[a-zA-Zа-яА-Я -]{1,}"
               value={name || ''} onChange={handleNameChange} />
        <span className="popup__error" id="owner-name-error"></span>
      </label>
      <label className="popup__label">
        <input type="text" name="userDescription" id="owner-description"
               className="popup__input popup__input_type_description" placeholder="Занятие"
               required minLength="2" maxLength="200"
               value={description || ''} onChange={handleDescriptionChange} />
        <span className="popup__error" id="owner-description-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
