import React from 'react'

const Liittyma = ({status, liittyma, edut}) => { 
    
    return (
        <>
            <ul className="item">
                <h3>{status}</h3>
                <p>Operaattori: {liittyma.operaattori}</p>
                <p>Liittymän nimi: {liittyma.nimi}</p>
                <p className={edut.puhe?'highlight':''}>Puhe: {liittyma.puhe}</p>
                <p className={edut.viestit?'highlight':''}>Viestit: {liittyma.viestit}</p>
                <p className={edut.netti?'highlight':''}>Netti: {liittyma.netti}</p>
                <p className={edut.rajaton?'highlight':''}>Rajaton netti: {liittyma.rajaton?'Kyllä':'ei'}</p>
                <p className={edut.hinta?'highlight':''}>Listahinta (kk): {liittyma.hinta}</p>
                <p className={edut.tarjous?'highlight':''}>Tarjoushinta (kk): {liittyma.tarjous}</p>
            </ul>
        </>
    )
}

export default Liittyma
