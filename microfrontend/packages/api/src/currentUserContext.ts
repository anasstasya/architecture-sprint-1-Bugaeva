import React from 'react';

export type UserInfo = {
    id: string,
    email: string,
    avatar: string,
    name: string,
    about: string
}

export const CurrentUserContext = React.createContext<UserInfo>({
    id:'', 
    email: '', 
    avatar: '', 
    name: '', 
    about: ''
});
