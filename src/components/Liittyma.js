import React from 'react'
import Valitsin from './Valitsin'

const Liittyma = ({status, liittymat, liittyma, edut, valitsin, setOffer, annaAlennus, alennus}) => { 
    
    const handleOfferChange = (event) => {
        setOffer(status, event.target.value)
    }

    const handleAlennus = (event) => {
        annaAlennus(parseInt(event.target.value))
    }

    return (
        <>
            <ul className="item">
                <h3>{status}</h3>
                <Valitsin liittymat={liittymat} status={status} valitsin={valitsin}/>                
                <p className={edut.puhe?'highlight':''}>Puhe: {liittyma.puhe}</p>
                <p className={edut.viestit?'highlight':''}>Viestit: {liittyma.viestit}</p>
                <p className={edut.netti?'highlight':''}>Netti: {liittyma.netti}</p>
                <p className={edut.rajaton?'highlight':''}>Rajaton netti: {liittyma.rajaton?'Kyllä':'ei'}</p>
                <p className={edut.hinta?'highlight':''}>Listahinta (kk): {liittyma.hinta}</p>
                <p className={edut.tarjous?'highlight':''} >Tarjoushinta (kk):<input type="number" value= {liittyma.tarjous} onChange={handleOfferChange}></input></p>
                {status === "Uusi"?<p>Alennus: <input type="number" value={alennus} onChange={handleAlennus}></input></p>:undefined}
            </ul>
        </>
    )
}

export default Liittyma
