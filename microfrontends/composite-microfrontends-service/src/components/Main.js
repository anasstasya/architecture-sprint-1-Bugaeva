import React, { lazy, Suspense } from 'react';

const Places = lazy(() => import('places_microfrontend/Places').catch(() => {
  return {default: () => <div className="error">Places is not available.</div>};
}));

const Profile = lazy(() => import('profiles_microfrontend/Profile').catch(() => {
  return {default: () => <div className="error">Profile is not available.</div>};
}));
  
function Main({currentUser}) {
  return (
    <main className="content">
      <Suspense fallback={<div>Загрузка...</div>}><Profile/></Suspense>
      {currentUser && <Suspense fallback={<div>Загрузка...</div>}><Places currentUser={currentUser}/></Suspense>}
    </main>
  );
}

export default Main;
