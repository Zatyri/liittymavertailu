import React from 'react'

const Liittyma = ({status, liittyma}) => {
    return (
        <>
            <ul className="item">
                <h3>{status}</h3>
                <p>Operaattori: {liittyma.operaattori}</p>
                <p>Liittymän nimi: {liittyma.nimi}</p>
                <p>Puhe: {liittyma.puhe}</p>
                <p>Viestit: {liittyma.viestit}</p>
                <p>Netti: {liittyma.netti}</p>
                <p>Rajaton netti: {liittyma.rajaton}</p>
                <p>Listahinta (kk): {liittyma.hinta}</p>
                <p>Tarjoushinta (kk): {liittyma.tarjous}</p>
            </ul>
        </>
    )
}

export default Liittyma
