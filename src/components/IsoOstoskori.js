import React from 'react'

const IsoOstoskori = ({kori, naytaKori}) => {

    const showKori = kori.map(liittyma =>    
        <tr>
            <td>{liittyma.operaattori} {liittyma.nimi}</td>
            <td>{liittyma.saasto}</td>
            <td>{liittyma.saasto?liittyma.saasto * 12:null}</td>
            <td>{liittyma.alennus}</td>
            <td><button>-</button></td>
        </tr>
    )

    const saastoKK = kori.map(liittyma => liittyma.saasto).reduce((sum, current) => sum + current)
    const alennukset = kori.map(liittyma => liittyma.alennus).reduce((sum, current) => sum + current)
    
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Liittymat</th>
                        <th>Säästö/kk</th>
                        <th>Säästö/vuos</th>
                        <th>Alennus</th>
                    </tr>
                    {showKori}
                    <tr>
                    <td>{kori[0]?kori.length:0} liittymää</td>
                    <td>{saastoKK}</td>
                    <td>{saastoKK?saastoKK*12:null}</td>
                    <td>{alennukset}</td>
                    
                    </tr>
                </tbody>
            </table>
            <button onClick={naytaKori}>Piilota kori</button>
        </div>
    )
}

export default IsoOstoskori
