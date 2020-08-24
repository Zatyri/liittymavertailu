import React, {useState, useEffect} from 'react'
import Liittyma from './Liittyma'

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

    const [edut, setEdut] = useState({        
        puhe: false,
        viestit: false,
        netti: false,
        rajaton: false,
        hinta: false,
        tarjous: false
    })

    const vertailu = () =>{

        if(puheJaViestiVertailu(nykyinen.puhe, uusi.puhe)){
            setEdut({puhe: true}) 
            console.log('true');
            console.log(edut.puhe);
        
        } else{
            setEdut({puhe: false})
  
        }
        if(puheJaViestiVertailu(nykyinen.viestit, uusi.viestit)){
            setEdut({viestit: true})
        } else {
            setEdut({viestit: false})
        }
        if(nettiVertailu(nykyinen.netti, uusi.netti)){
            setEdut({netti: true})
        } else {
            setEdut({netti: false})
        }
        if(rajatonVertailu(nykyinen.rajaton, uusi.rajaton)){
            setEdut({rajaton:true})
        } else {
            setEdut({rajaton:false})
        }
        if(hintaVertailu(nykyinen.hinta, uusi.hinta)){
            setEdut({hinta:true})
        } else {
            setEdut({hinta:false})
        }
        if(hintaVertailu(nykyinen.tarjous, uusi.tarjous)){
            setEdut({tarjous:true})
        } else {
            setEdut({tarjous:false})
        }
        console.log(edut);
}

useEffect(vertailu, [])


    return (
        <div className='container'>
            <Liittyma status='Nykyinen' liittyma={nykyinen}/>
            <Liittyma status='Uusi' liittyma={uusi}/>
        </div>
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
    if(typeof(uusi) === 'string' && typeof(vanha) !== 'string'){
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