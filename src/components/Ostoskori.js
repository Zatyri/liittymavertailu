import React from 'react'

const Ostoskori = ({kokonaisSaasto}) => {
    const saastot = kokonaisSaasto.map(x => x.saasto)
    const saastotYhteensa = saastot.reduce((sum, current) => sum + current)
    const alennus = kokonaisSaasto.map(x => x.alennus)
    const alennuksetYhteensa = alennus.reduce((sum, current) => sum + current)

    return (
        <ul>
            <h3>Kori</h3>
            {kokonaisSaasto[0]?<p>{kokonaisSaasto.length} {kokonaisSaasto.length === 1?"liittymä":"liittymää"}</p>:null}
            {kokonaisSaasto[0]?<p>{saastotYhteensa}€/kk ja {saastotYhteensa*12}€/vuosi</p>:<p>Kori on tyhjä</p>}
            {kokonaisSaasto[0]?<p>Kerta alennus: {alennuksetYhteensa}€</p>:undefined}
        </ul>
    )
}

export default Ostoskori
