import React, {useState, useEffect} from 'react'
import Liittyma from './Liittyma'
import Saastolaskuri from './Saastolaskuri'
import Ostoskori from './Ostoskori'
import IsoOstoskori from './IsoOstoskori'

const Vertailu = ({liittymat}) => {

    /***************************************
    States
    ****************************************/
    const [nykyinen, setNykyinen] = useState({
        operaattori: "Valitse operaattori",
        nimi: "Valitse liittymätyyppi",
        puhe: "",
        viestit: "",
        netti: "",
        rajaton: false,
        hinta: "",
        tarjous: ""
    })
    const [uusi, setUusi] = useState({
        operaattori: "Valitse operaattori",
        nimi: "Valitse liittymätyyppi",
        puhe: "",
        viestit: "",
        netti: "",
        rajaton: false,
        hinta: "",
        tarjous: "",
        alennus: ""
    })
    const [alennus, setAlennus] = useState("")
    const [edut, setEdut] = useState({})
    const dummyEdut = {puhe:false,viestit:false,netti:false,rajaton:false,hinta:false,tarjous:false}
    const [saasto, setSaasto] = useState([false])
    

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

    const handleLiittymavalitsin = (liittyma, tila) => {  
        const valittuLiittyma = JSON.parse(liittyma)
        valittuLiittyma.tarjous = valittuLiittyma.hinta
        if(tila === "Nykyinen"){
            setNykyinen(valittuLiittyma)
        } else if( tila === "Uusi"){
            setUusi(valittuLiittyma)
        }
    }

    const setOffer = (tila, value) => {
        const uusiTarjous = {...nykyinen} 
        uusiTarjous.tarjous = value
        if(tila === "Nykyinen"){
            const uusiTarjous = {...nykyinen} 
            uusiTarjous.tarjous = value
            setNykyinen(uusiTarjous)
        } else if( tila === "Uusi"){
            const uusiTarjous = {...uusi} 
            uusiTarjous.tarjous = value
            setUusi(uusiTarjous)
        }
    }

    const kokonaisSaasto = (event) => { 
        if(nykyinen.operaattori === "Valitse operaattori" || uusi.operaattori === "Valitse operaattori"){
            return null
        }
        const uusiKori = [{
            operaattori: uusi.operaattori,
            nimi: uusi.nimi,
            saasto: parseInt(event.target.value),
            alennus: alennus
        }]

        saasto[0]?setSaasto(saasto.concat(uusiKori)):setSaasto(uusiKori)
    }

    const annaAlennus = (alennus) => { 
        setAlennus(alennus)
    }


    return (
        <>
            <div className='container'>
                <Liittyma status='Nykyinen' liittymat={liittymat} liittyma={nykyinen} edut={dummyEdut} valitsin={handleLiittymavalitsin} setOffer={setOffer}/>
                <Liittyma status='Uusi' liittymat={liittymat} liittyma={uusi} edut={edut} valitsin={handleLiittymavalitsin} setOffer={setOffer} annaAlennus={annaAlennus} alennus={alennus}/>  
                <Saastolaskuri vanhaHinta={nykyinen.tarjous} uusiHinta={uusi.tarjous} lisaaKoriin={kokonaisSaasto}/>              
                <Ostoskori kokonaisSaasto={saasto}/>
                <IsoOstoskori kori={saasto}/>
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