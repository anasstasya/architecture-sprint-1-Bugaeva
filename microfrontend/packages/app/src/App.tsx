import Parcel from 'single-spa-react/parcel'
import *  as singleSpa from 'single-spa'
import './App.css'

// @ts-expect-error import from importmap
import * as signinMFE from 'mesto/signin'
// @ts-expect-error import from importmap
import * as mainMFE from 'mesto/main'
import { useEffect, useState } from 'react'
import { api, CurrentUserContext } from 'api'
import type {UserInfo} from 'api'

function App() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    about: '',
    avatar: '',
    email: '',
    id: '',
    name: ''
  })

  useEffect(()=>{

    const handler = ()=>{

      api
      .getUserInfo()
      .then((me) => {
        setUserInfo({
          ...me,
          id: me._id
        });
      })
      .catch((err) => console.log(err));
    };

    document.addEventListener('onSignIn', handler);

    return ()=> document.removeEventListener('onSignIn', handler)

  },[])

  const [parcel, setParcel] = useState<'main'|'signin'>('signin')

  return (
    <div className="page__content">
      <button onClick={()=>setParcel('signin')}>Open sign in</button>
      <button onClick={()=>setParcel('main')}>Open main</button>
      <CurrentUserContext.Provider value={userInfo}>
        <Parcel
          config={parcel === 'signin' ? signinMFE : mainMFE}
          mountParcel={singleSpa.mountRootParcel}
        />
      </CurrentUserContext.Provider>
    </div>
  )
}

export default App
