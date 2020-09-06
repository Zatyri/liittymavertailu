import React, { useState } from 'react'

const Valitsin = ({ liittymat, status, valitsin }) => {

    const [valittuOperaattori, setValittuOperaattori] = useState()
    //const [valittuLiittyma, setValittuLiittyma] = useState()

    const distinct = (value, index, self) => {
        return self.indexOf(value) === index
    }

    const handleOperaattoriSelect = (event) => setValittuOperaattori(event.target.value)
    const handleLiittymaSelect = (event) => {
                
        valitsin(event.target.value, status)
    }

    let operaattorit = liittymat.map(liittyma => liittyma.operaattori)
    operaattorit = operaattorit.filter(distinct)
   
    const poulateOperaattori = operaattorit.map(operaattori =>       
         <button key={operaattori} value={operaattori} onClick={handleOperaattoriSelect}>{operaattori}</button>)
    
    const populateLiittyma = liittymat.filter(liittyma => liittyma.operaattori === valittuOperaattori)
    
    
    return (
        <>
        <div>{poulateOperaattori}</div>    
            <select onChange={handleLiittymaSelect}>
                <option>Valitse liittymatyyppi</option>
                {populateLiittyma.map(liittyma => <option key={liittyma.nimi} value={JSON.stringify(liittyma)}>{liittyma.nimi}</option>)}
            </select>
        </>
    )
}

export default Valitsin
