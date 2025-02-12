import React, { lazy, Suspense } from 'react';
import PlacesContent from "./PlacesContent.js";
import AddPlacePopup from "./AddPlacePopup.js";
import placesApiClient from "../utils/places-api-client.js";

const ImagePopup = lazy(() => import('common_components/ImagePopup').catch(() => {
  return { default: () => <div className="error">ImagePopup is not available.</div> };
}))

function Places({ currentUser }) {
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isCardImagePopupOpen, setIsCardImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    placesApiClient
      .getCardList()
      .then((cardsResponse) => {
        setCards(cardsResponse);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPlacesPopups() {
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
    setIsCardImagePopupOpen(false);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setIsCardImagePopupOpen(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    placesApiClient
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    placesApiClient
      .removeCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(newCard) {
    placesApiClient
      .addCard(newCard)
      .then((newCardFull) => {
        setCards([newCardFull, ...cards]);
        closeAllPlacesPopups();
      })
      .catch((err) => console.log(err));
  }

  return (currentUser &&
    <>
      <PlacesContent
        cards={cards}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
        currentUserId={currentUser._id}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onAddPlace={handleAddPlaceSubmit}
        onClose={closeAllPlacesPopups}
      />
      <Suspense fallback={<div>Загрузка...</div>}>
        <ImagePopup
          isOpen={isCardImagePopupOpen}
          name={selectedCard?.name}
          link={selectedCard?.link}
          onClose={closeAllPlacesPopups}
        />
      </Suspense>
    </>
  );
}

export default Places;
