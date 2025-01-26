import React, { lazy } from 'react';

const UserPane = lazy(() => import('profiles/UserPane').catch(() => {
  return { default: () => <div className="error">UserPane component is not available</div> };
}));

const CardPane = lazy(() => import('cards/CardPane').catch(() => {
  return { default: () => <div className="error">CardPane component is not available</div> };
}));

const AddPlaceButton = lazy(() => import('cards/AddPlaceButton').catch(() => {
  return { default: () => <div className="error">AddPlaceButton component is not available</div> };
}));

function Main() {
  return (
    <main className="content">
      <div className="page__section panel">
        <UserPane/>
        <div className="panel__right-item">
          <AddPlaceButton/>
        </div>
      </div>
      <CardPane/>
    </main>
  );
}

export default Main;
