import React from 'react'

const Saastolaskuri = ({vanhaHinta, uusiHinta}) => {
    const erotus = vanhaHinta - uusiHinta
    return (
        <ul className='item'>
            <p>Säästä {erotus}/kk ja {erotus*12}/vuosi</p>
        </ul>
    )
}

export default Saastolaskuri
