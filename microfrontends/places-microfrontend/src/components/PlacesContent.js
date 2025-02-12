import React from 'react';
import Card from './Card';

import '../index.css';

function PlacesContent({ cards, onCardClick, onCardLike, onCardDelete, onAddPlace, currentUserId }) {

  return (
    <main className="content">
      <section className="places page__section">
        <button className="places__add-button" type="button" onClick={onAddPlace}></button>
      </section>
      <section className="places page__section">
      <ul className="places__list">
          {cards?.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
              currentUserId={currentUserId}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default PlacesContent;
