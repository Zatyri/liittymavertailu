import React, { useState, useEffect }from 'react'
import Header from './Header'
import Vertailu from './Vertailu'
import Liittymaservice from '../utility/server'

const Ohjelma = () => {

    const [liittymat, setLiittymat] = useState(null)

useEffect( () => {
    Liittymaservice.getAll()
    .then(data => {
        setLiittymat(data)
    })
}, [])

    


    return (
        <>
            <Header headerText='Liittymävertailu' />
            <Vertailu liittymat={liittymat} />
            
        </>
    )
}

export default Ohjelma
