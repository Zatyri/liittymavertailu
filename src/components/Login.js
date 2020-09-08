import React, { useState } from 'react'
import loginService from '../services/login'


const Login = ({login}) => {
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({ username, password })
            setUserName(user)
            window.localStorage.setItem(
              'userLogin', JSON.stringify(user)
            )
            login()
          } catch (ex) {
            console.log(ex.message)  
            setUserName('')
            setPassword('')          
          }    
    }

    return (
        <>
            <h2 className='header'>Kirjaudu sisään</h2>
            <form className='login' onSubmit={handleLogin}>
                <div className='inputDiv'>
                    Käyttäjänimi:<br></br>
                    <input type="text" value={username} onChange={({target})=> setUserName(target.value)}>
                    </input>
                </div>
                <div className='inputDiv'>
                    Salasana:<br></br>
                    <input type="password" value={password} onChange={({target})=> setPassword(target.value)}>
                    </input>
                </div>
                <button>Kirjaudu</button>
            </form>
            
        </>
    )
}

export default Login
