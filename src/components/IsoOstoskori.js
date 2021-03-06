import React from 'react'

const IsoOstoskori = ({kori, naytaKori, handleRemoveLiittyma}) => {

    const showKori = kori.map(liittyma =>      
          
        <tr key={liittyma.id}>
            <td>{liittyma.operaattori} {liittyma.nimi}</td>
            <td>{liittyma.saasto}</td>
            <td>{liittyma.saasto?liittyma.saasto * 12:null}</td>
            <td>{liittyma.alennus}</td>
            <td><button value={liittyma.id} onClick={handleRemoveLiittyma}>-</button><button>+</button></td>
        </tr>
    )

    const saastoKK = kori.map(liittyma => liittyma.saasto).reduce((sum, current) => sum + current)
    const alennukset = kori.map(liittyma => liittyma.alennus).reduce((sum, current) => sum + current)
    
    return (
        <div className='liittyma_display'>
            <table>
                <tbody>
                    <tr>
                        <th>Liittymat</th>
                        <th>Säästö/kk</th>
                        <th>Säästö/vuos</th>
                        <th>Alennus</th>
                    </tr>
                    {showKori}
                    <tr className='lopputulos'>
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
