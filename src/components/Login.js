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
            <h2>Kirjaudu sisään</h2>
            <form onSubmit={handleLogin}>
                <div>
                    Käyttäjänimi
                    <input type="text" value={username} onChange={({target})=> setUserName(target.value)}>
                    </input>
                </div>
                <div>
                    Salasana
                    <input type="password" value={password} onChange={({target})=> setPassword(target.value)}>
                    </input>
                </div>
                <button>Submit</button>
            </form>
            
        </>
    )
}

export default Login
