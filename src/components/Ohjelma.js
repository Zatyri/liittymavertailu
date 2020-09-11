import React, { useState, useEffect }from 'react'
import Vertailu from './Vertailu'
import Liittymaservice from '../services/littyma'
import Addliittyma from './Addliittyma'

const Ohjelma = ({login}) => {

    const [liittymat, setLiittymat] = useState([])

useEffect( () => {
    Liittymaservice.getAll()
    .then(data => {
        setLiittymat(data)
    })        
    
}, [])
    
    


    return (
        <>
            <Vertailu liittymat={liittymat} />
            <Addliittyma />
            <button onClick={login}>Kirjaudu ulos</button>
            
        </>
    )
}

export default Ohjelma
