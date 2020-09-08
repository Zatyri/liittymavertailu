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
                <h3>{status} operaattori</h3>
                <Valitsin liittymat={liittymat} status={status} valitsin={valitsin}/>                
                <p className={edut.puhe?'liittyma_prop highlight':'liittyma_prop'}>Puhe: {liittyma.puhe}</p>
                <p className={edut.viestit?'liittyma_prop highlight':'liittyma_prop'}>Viestit: {liittyma.viestit}</p>
                <p className={edut.netti?'liittyma_prop highlight':'liittyma_prop'}>Netti: {liittyma.netti}</p>
                <p className={edut.rajaton?'liittyma_prop highlight':'liittyma_prop'}>Rajaton netti: {liittyma.rajaton?'Kyllä':'ei'}</p>
                <p className={edut.eu?'liittyma_prop highlight':'liittyma_prop'}>Eu data: {liittyma.eu}</p>
                <p className={edut.hinta?'liittyma_prop highlight':'liittyma_prop'}>Listahinta (kk): {liittyma.hinta}</p>
                <p className={edut.tarjous?'liittyma_prop highlight':'liittyma_prop'} >Tarjoushinta (kk):<input type="number" value= {liittyma.tarjous} onChange={handleOfferChange}></input></p>
                {status === "Uusi"?<p className='liittyma_prop'>Alennus: <input type="number" value={alennus} onChange={handleAlennus}></input></p>:undefined}
            </ul>
        </>
    )
}

export default Liittyma
