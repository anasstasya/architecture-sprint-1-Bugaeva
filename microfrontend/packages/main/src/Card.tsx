import React from 'react';
import { CurrentUserContext } from 'api';

function Card({ card }: {card: any}) {
  const cardStyle = { backgroundImage: `url(${card.link})` };

  const currentUser = React.useContext(CurrentUserContext);

  const isLiked = card.likes.some((i:any) => i._id === currentUser.id);
  const cardLikeButtonClassName = `card__like-button ${isLiked && 'card__like-button_is-active'}`;

  const isOwn = card.owner._id === currentUser.id;
  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );

  return (
    <li className="places__item card">
      <div className="card__image" style={cardStyle}>
      </div>
      <button type="button" className={cardDeleteButtonClassName}></button>
      <div className="card__description">
        <h2 className="card__title">
          {card.name}
        </h2>
        <div className="card__likes">
          <button type="button" className={cardLikeButtonClassName}></button>
          <p className="card__like-count">{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;
