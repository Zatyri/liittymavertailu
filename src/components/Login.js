import React, { useState } from 'react'

const Login = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = (event) => {
        event.preventDefault()
        
    }

    return (
        <>
            <h2>Kirjaudu sisään</h2>
            <form onSubmit={handleLogin}>
                <div>
                    Käyttäjänimi
                    <input type="text" value={user} onChange={({target})=> setUser(target.value)}>
                    </input>
                </div>
                <div>
                    Salasana
                    <input type="text" value={password} onChange={({target})=> setPassword(target.value)}>
                    </input>
                </div>
            </form>
            
        </>
    )
}

export default Login
