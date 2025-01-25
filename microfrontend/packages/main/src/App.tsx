import React, { useEffect, useState } from 'react';
import Card from './Card';
import { CurrentUserContext, api } from 'api';

function Main() {
  const currentUser = React.useContext(CurrentUserContext);

  const [cards, setCards] = useState<any[]>([]);

  useEffect(()=>{
    api
      .getAppInfo()
      .then(([cardData]) => {
        setCards(cardData);
      })
      .catch((err) => console.log(err));
  },[])

  const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

  return (
    <main className="content">
      <section className="profile page__section">
        <div className="profile__image" style={imageStyle}></div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
          <button className="profile__edit-button" type="button"></button>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button"></button>
      </section>
      <section className="places page__section">
        <ul className="places__list">
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
