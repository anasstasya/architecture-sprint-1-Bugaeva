import React from 'react';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import api from '../utils/api';
import '../blocks/profile/profile.css';

function UserPane() {
  const [currentUser, setCurrentUser] = React.useState({});

  function handleUserUpdate(userData) {
    setCurrentUser(userData);
    dispatchEvent(new CustomEvent("profiles-user-update", { detail: userData }));
  }

  function handleEditProfileClick() {
    dispatchEvent(new CustomEvent("_profiles-edit-profile-popup-open"));
  }

  function handleEditAvatarClick() {
    dispatchEvent(new CustomEvent("_profiles-edit-avatar-popup-open"));
  }

  // Запрос к API за информацией о пользователе выполняется единожды, при монтировании.
  React.useEffect(() => {
    api
        .getUserInfo()
        .then((userData) => {
          handleUserUpdate(userData);
        })
        .catch((err) => console.log(err));
    }, []);
  
  const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };
  return (
    <section className="profile">
      <div className="profile__image" onClick={handleEditAvatarClick} style={imageStyle}></div>
      <div className="profile__info">
        <h1 className="profile__title">{currentUser.name}</h1>
        <button className="profile__edit-button" type="button" onClick={handleEditProfileClick}></button>
        <p className="profile__description">{currentUser.about}</p>
      </div>
      <EditProfilePopup
        onUserUpdate={handleUserUpdate}
      />
      <EditAvatarPopup
        onUserUpdate={handleUserUpdate}
      />
    </section>
);
}

export default UserPane;
