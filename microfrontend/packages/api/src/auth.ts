const BASE_URL = 'https://auth.nomoreparties.co';

const getResponse = (res: Response) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const register = (email: string, password: string) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(getResponse)
};
export const login = (email: string, password: string) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then(getResponse)
  .then((data) => {
    localStorage.setItem('jwt', data.token)
    return data;
  })
};
export const checkToken = (token: string) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(getResponse)
}

export const isAuthorized = ()=>{
  return localStorage.getItem('jwt') !== null
}

export default {
  register,
  login,
  checkToken,
  isAuthorized
}