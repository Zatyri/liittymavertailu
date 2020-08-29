import React from 'react'

const Saastolaskuri = ({vanhaHinta, uusiHinta, lisaaKoriin}) => {
    const erotus = vanhaHinta - uusiHinta
    return (
        <ul className='item'>
            <p>Säästä {erotus}€/kk ja {erotus*12}€/vuosi</p>
            <button type="submit" value={erotus} onClick={lisaaKoriin}>Lisaa koriin</button>
        </ul>
    )
}

export default Saastolaskuri
