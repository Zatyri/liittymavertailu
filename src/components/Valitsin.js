import React, { useState } from 'react'
import logo from '../logot/logot'

const Valitsin = ({ liittymat, status, valitsin }) => {

    const [valittuOperaattori, setValittuOperaattori] = useState()

    const distinct = (value, index, self) => {
        return self.indexOf(value) === index
    }

    const handleOperaattoriSelect = (event) => setValittuOperaattori(event.target.value)    
    
    const handleLiittymaSelect = (event) => {
                
        valitsin(event.target.value, status)
    }

    let operaattorit = liittymat.map(liittyma => liittyma.operaattori)
    operaattorit = operaattorit.filter(distinct)
   
    const poulateOperaattori = operaattorit.map(operaattori => {
        if(operaattori === 'Elisa'){
            return <input key={operaattori} className='operaattori_button' type='image' src={logo.Elisa} alt={operaattori} value={operaattori} onClick={handleOperaattoriSelect}/> 
        } else if(operaattori === 'Telia'){
            return <input key={operaattori} className='operaattori_button'type='image' src={logo.Telia} alt={operaattori} value={operaattori} onClick={handleOperaattoriSelect}/> 
        } else if(operaattori === 'DNA'){
            return <input key={operaattori} className='operaattori_button' type='image' src={logo.DNA} alt={operaattori} value={operaattori} onClick={handleOperaattoriSelect}/> 
        } else {
            return <button key={operaattori} className='operaattori' value={operaattori} onClick={handleOperaattoriSelect}>{operaattori}</button>
        }
    })

    
    const populateLiittyma = liittymat.filter(liittyma => liittyma.operaattori === valittuOperaattori)
    
    
    return (
        <>
        <div>{poulateOperaattori}</div>         
            <select className='liittyma_prop' onChange={handleLiittymaSelect}>
                <option>Valitse liittymatyyppi</option>
                {populateLiittyma.map(liittyma => <option key={liittyma.nimi} value={JSON.stringify(liittyma)}>{liittyma.nimi}</option>)}
            </select>
        </>
    )
}

export default Valitsin
