import React, {useState, useEffect} from 'react'
import Liittyma from './Liittyma'
import Saastolaskuri from './Saastolaskuri'

const Vertailu = () => {
    const [nykyinen, setNykyinen] = useState({
        operaattori: "TestiOperaattor1",
        nimi: "test1",
        puhe: 5000,
        viestit: "Rajaton",
        netti: 150,
        rajaton: false,
        hinta: 29.90,
        tarjous: 21.90

    })
    const [uusi, setUusi] = useState({
        operaattori: "TestiOperaattori2",
        nimi: "test2",
        puhe: "Rajaton",
        viestit: "Rajaton",
        netti: 200,
        rajaton: true,
        hinta: 29.90,
        tarjous: 19.90
    })

    const [edut, setEdut] = useState({})
    const dummyEdut = {puhe:false,viestit:false,netti:false,rajaton:false,hinta:false,tarjous:false}

    const vertailu = () =>{
        const newEdut = {
            puhe: puheJaViestiVertailu(nykyinen.puhe, uusi.puhe),
            viestit: puheJaViestiVertailu(nykyinen.viestit, uusi.viestit),
            netti: nettiVertailu(nykyinen.netti, uusi.netti),
            rajaton: rajatonVertailu(nykyinen.rajaton, uusi.rajaton),
            hinta: hintaVertailu(nykyinen.hinta, uusi.hinta),
            tarjous: hintaVertailu(nykyinen.tarjous, uusi.tarjous)
        }
        setEdut(newEdut)
}

useEffect(vertailu, [uusi])


    return (
        <>
            <div className='container'>
                <Liittyma status='Nykyinen' liittyma={nykyinen} edut={dummyEdut}/>
                <Liittyma status='Uusi' liittyma={uusi} edut={edut}/>  
                <Saastolaskuri vanhaHinta={nykyinen.tarjous} uusiHinta={uusi.tarjous}/>              
            </div>
            
        </>
    )
}

export default Vertailu



const puheJaViestiVertailu = (vanha, uusi) =>{
    //testausta pitää laajentaa 
    if(typeof(uusi) === 'string' && typeof(vanha) !== 'string'){
        return true
    }
    return false
}

const nettiVertailu = (vanha,uusi) => {
    if(uusi > vanha){
        return true
    }
    return false
}

const rajatonVertailu = (vanha, uusi) => {
    if(uusi){
        return true
    }
    return false
}

const hintaVertailu = (vanha, uusi) => {
    if(uusi < vanha){
        return true
    }
    return false
}