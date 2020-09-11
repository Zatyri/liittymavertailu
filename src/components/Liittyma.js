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
            <ul className={status}>
                <h3>{status} operaattori</h3>
                <Valitsin liittymat={liittymat} status={status} valitsin={valitsin}/>                
                <p className={edut.puhe?'liittyma_prop highlight':'liittyma_prop'}><span>Puhe: </span>{liittyma.puhe}</p>
                <p className={edut.viestit?'liittyma_prop highlight':'liittyma_prop'}><span>Viestit:</span> {liittyma.viestit}</p>
                <p className={edut.netti?'liittyma_prop highlight':'liittyma_prop'}><span>Netti:</span> {liittyma.netti}</p>
                <p className={edut.rajaton?'liittyma_prop highlight':'liittyma_prop'}><span>Rajaton netti:</span> {liittyma.rajaton?'Kyllä':'ei'}</p>
                <p className={edut.eu?'liittyma_prop highlight':'liittyma_prop'}><span>Eu data: </span>{liittyma.eu}</p>
                <p className={edut.hinta?'liittyma_prop highlight':'liittyma_prop'}><span>Listahinta (kk):</span> {liittyma.hinta}</p>
                <p className={edut.tarjous?'liittyma_prop highlight':'liittyma_prop'} ><span>Tarjoushinta (kk):</span><input type="number" value= {liittyma.tarjous} onChange={handleOfferChange}></input></p>
                {status === "Uusi"?<p className='liittyma_prop'>Alennus: <input type="number" value={alennus} onChange={handleAlennus}></input></p>:undefined}
            </ul>
        </>
    )
}

export default Liittyma
