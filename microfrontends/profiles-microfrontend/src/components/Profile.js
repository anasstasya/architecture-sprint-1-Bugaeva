import React from "react";
import ProfileContent from "./ProfileContent.js";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import usersApiClient from "../utils/users-api-client.js";

function Profile() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    usersApiClient
      .getUserInfo()
      .then((userInfo) => {
        setCurrentUser(userInfo);
        dispatchEvent(new CustomEvent("current-user-loaded", {
            detail: { currentUser: userInfo }
        }));
      })
      .catch((err) => console.log(err));
  }, []);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllUsersPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  function handleUpdateUser(userUpdate) {
    usersApiClient
      .setUserInfo(userUpdate)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        dispatchEvent(new CustomEvent("current-user-updated", {
            detail: { currentUser: newUserData }
        }));
        closeAllUsersPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatarUpdate) {
    usersApiClient
      .setUserAvatar(avatarUpdate)
      .then((newUserData) => {
        setCurrentUser(newUserData);
        dispatchEvent(new CustomEvent("current-user-avatar-updated", {
            detail: { currentUser: newUserData }
        }));
        closeAllUsersPopups();
      })
      .catch((err) => console.log(err));
  }

  return (
      <>
        <ProfileContent 
          onEditProfile={handleEditProfileClick}
          onEditAvatar = {handleEditAvatarClick}
          currentUser = {currentUser}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onUpdateUser={handleUpdateUser}
          onClose={closeAllUsersPopups}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onUpdateAvatar={handleUpdateAvatar}
          onClose={closeAllUsersPopups}
        />
      </>
  );
}

export default Profile;
