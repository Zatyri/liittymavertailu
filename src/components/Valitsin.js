import React, { useState, useEffect } from 'react'

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
         <option key={operaattori} value={operaattori} >{operaattori}</option>)
    
    const populateLiittyma = liittymat.filter(liittyma => liittyma.operaattori === valittuOperaattori)
    
    
    return (
        <>
            <select onChange={handleOperaattoriSelect}>
                <option >Valitse operaattori</option>
                {poulateOperaattori}
            </select>
            <select onChange={handleLiittymaSelect}>
                <option>Valitse liittymatyyppi</option>
                {populateLiittyma.map(liittyma => <option key={liittyma.nimi} value={JSON.stringify(liittyma)}>{liittyma.nimi}</option>)}
            </select>
        </>
    )
}

export default Valitsin
