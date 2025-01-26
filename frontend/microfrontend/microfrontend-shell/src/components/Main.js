import React, { lazy } from 'react';
import Card from './Card';
import { CurrentUserContext } from 'shared-library';

const UserPane = lazy(() => import('profiles/UserPane').catch(() => {
  return { default: () => <div className="error">UserPane component is not available</div> };
}));


function Main({ cards, onAddPlace, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

  return (
    <main className="content">
      <div className="page__section panel">
        <UserPane/>
        <div className="panel__right-item">
          <button className="places__add-button" type="button" onClick={onAddPlace}></button>
        </div>
      </div>
      <section className="places page__section">
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onCardDelete={onCardDelete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
