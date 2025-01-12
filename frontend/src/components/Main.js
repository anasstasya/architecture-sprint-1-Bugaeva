import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Main() {
    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main className="content">
            <section className="page__section">
                <Profile currentUser={currentUser}/>
            </section>
            <section className="page__section">
                <Places currentUser={currentUser}/>
            </section>
        </main>
    );
}

export default Main;