import React, {useState} from 'react';

import "../blocks/places/places.css"
import Card from "./Card";
import AddPlacePopup from "./AddPlacePopup";
import PopupWithForm from "../../../ui-lib/src/components/PopupWithForm";
import api from "../utils/api";
import ImagePopup from "../../../ui-lib/src/components/ImagePopup";

export default function Profile({currentUser, onCardClick, onCardLike, onCardDelete}) {

    const [cards, setCards] = useState([]);

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

    function handleAddPlaceSubmit(newCard) {
        api
            .addCard(newCard)
            .then((newCardFull) => {
                setCards([newCardFull, ...cards]);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    return (
        <>
            <div className="places">
                <ul className="places__list">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            currentUser={currentUser}
                            card={card}
                            onCardClick={onCardClick}
                            onCardLike={onCardLike}
                            onCardDelete={onCardDelete}
                        />
                    ))}
                </ul>
            </div>
            <AddPlacePopup
                isOpen={isAddPlacePopupOpen}
                onAddPlace={handleAddPlaceSubmit}
                onClose={closeAllPopups}
            />
            <PopupWithForm title="Вы уверены?" name="remove-card" buttonText="Да"/>
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </>
    )
}