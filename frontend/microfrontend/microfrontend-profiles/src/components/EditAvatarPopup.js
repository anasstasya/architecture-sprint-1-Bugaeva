import React from 'react';
import { PopupWithForm } from 'shared-library';
import api from '../utils/api';

function EditAvatarPopup({ onUserUpdate }) {

  const [isOpen, setIsOpen] = React.useState(false);

  const inputRef = React.useRef();

  const handlePopupOpen = () => {
    setIsOpen(true);
  }

  const handlePopupClose = () => {
    setIsOpen(false);
  }

  React.useEffect(() => {
    addEventListener("_profiles-edit-avatar-popup-open", handlePopupOpen);
    return () => removeEventListener("_profiles-edit-avatar-popup-open", handlePopupOpen);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    api
      .setUserAvatar({
        avatar: inputRef.current.value,
      })
      .then((newUserData) => {
        onUserUpdate(newUserData);
        handlePopupClose();
      })
      .catch((err) => console.log(err));
  }

  return (
    <PopupWithForm
      isOpen={isOpen} onSubmit={handleSubmit} onClose={handlePopupClose} title="Обновить аватар" name="edit-avatar"
    >

      <label className="popup__label">
        <input type="url" name="avatar" id="owner-avatar"
               className="popup__input popup__input_type_description" placeholder="Ссылка на изображение"
               required ref={inputRef} />
        <span className="popup__error" id="owner-avatar-error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
