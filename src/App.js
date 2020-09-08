import React, {useState, useEffect} from 'react';
import Ohjelma from './components/Ohjelma'
import Login from './components/Login'

const App = () =>  {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = () => {
    if(!isLoggedIn){
      setIsLoggedIn(true)
    } else{
      window.localStorage.removeItem('userLogin')
      setIsLoggedIn(false)
    }
    
  }

  useEffect(() => {
    const userLoggedIn = window.localStorage.getItem('userLogin')
    if(userLoggedIn){
      setIsLoggedIn(true)
    }
  }, [])
 

  return (
    <>
      {isLoggedIn?<Ohjelma login={login}/>:<Login login={login}/>}
    </>
  )
}

export default App;
