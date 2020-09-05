import React, { useState, useEffect }from 'react'
import Header from './Header'
import Vertailu from './Vertailu'
import Liittymaservice from '../utility/server'
import Addliittyma from './Addliittyma'

const Ohjelma = () => {

    const [liittymat, setLiittymat] = useState([])

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
            <Addliittyma />
            
        </>
    )
}

export default Ohjelma
