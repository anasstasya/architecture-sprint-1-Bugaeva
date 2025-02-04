import React from 'react';
import Card from './Card';
import ImagePopup from './ImagePopup';
import AddPlacePopup from './AddPlacePopup';
import { PopupWithForm } from 'shared-library';
import { CurrentUserContext } from 'shared-library';
import api from '../utils/api';
import '../blocks/places/places.css';

function CardPane() {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  // Запрос к API за информацией о массиве карточек выполняется единожды, при монтировании.
  React.useEffect(() => {
    api
      .getCardList()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch((err) => console.log(err));
  }, []);
  
  function handleAddPlace(newCard) {
    api
      .addCard(newCard)
      .then((newCardFull) => {
        setCards([newCardFull, ...cards]);
      })
      .catch((err) => console.log(err));
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((cards) =>
          cards.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        setCards((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  function handleImagePopupClose() {
    setSelectedCard(null);
  }

  return (
    <section className="places page__section">
      <ul className="places__list">
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={setSelectedCard}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </ul>
      <ImagePopup card={selectedCard} onClose={handleImagePopupClose} />
      <AddPlacePopup
        onAddPlace={handleAddPlace}
      />
      <PopupWithForm title="Вы уверены?" name="remove-card" buttonText="Да" />
    </section>
  );
}

export default CardPane;
