import React, {useState} from 'react'

const Addliittyma = () => {
    const [liittyma, setLiittyma] = useState({     
        operaattori: "",
        nimi: "",
        puhe: "",
        viestit: "",
        netti: "",
        rajaton: false,
        eu: "",
        hinta: ""
    })

    const liittymaModel = {
        operaattori: "",
        nimi: "",
        puhe: "",
        viestit: "",
        netti: "",
        rajaton: false,
        eu: "",
        hinta: ""
    }

    const handleClick = (event) => {        
        const newLiittyma = {...liittyma}
        newLiittyma.operaattori = event.target.value
        setLiittyma(newLiittyma)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(liittyma);
        setLiittyma(liittymaModel)
    }

    const handleRajaton = (event) => {
        event.preventDefault()
        const toUpdate = event.target.value        
        
        if(toUpdate === "puhe"){
            setLiittyma({...liittyma, puhe:"rajaton"})
        } else if(toUpdate === "viestit"){
            setLiittyma({...liittyma, viestit:"rajaton"})
        } else if(toUpdate === "netti"){
            setLiittyma({...liittyma, rajaton:true})
        } else if(toUpdate === "einetti"){
            setLiittyma({...liittyma, rajaton:false})
        }  
    }

    return (
        <>
        <div>Operaattori: <button value="DNA" onClick={handleClick}>DNA</button><button value="Telia" onClick={handleClick}>Telia</button><button value="Elisa" onClick={handleClick}>Elisa</button></div>
        <form>
            <div>Nimi: <input type="text" value={liittyma.nimi} onChange={({target})=> setLiittyma({...liittyma, nimi: target.value})}></input></div>
            <div>Puhe: <input type="number" value={Number.isInteger(liittyma.puhe)?liittyma.puhe:undefined} onChange={({target})=> setLiittyma({...liittyma, puhe: target.value})}></input><button value="puhe" onClick={handleRajaton}>Rajaton</button></div>
            <div>Viestit: <input type="number" value={Number.isInteger(liittyma.viestit)?liittyma.viestit:undefined} onChange={({target})=> setLiittyma({...liittyma, viestit: target.value})}></input><button value="viestit" onClick={handleRajaton}>Rajaton</button></div>
            <div>Netti (nopeus): <input type="number" value={liittyma.netti} onChange={({target})=> setLiittyma({...liittyma, netti: target.value})}></input></div>
            <div>Rajaton netti: <button value="netti"  onClick={handleRajaton}>Kyllä</button><button value="einetti"  onClick={handleRajaton}>Ei</button></div>
            <div>Eu data: <input type="number" value={liittyma.eu} onChange={({target})=> setLiittyma({...liittyma, eu: target.value})}></input></div>
            <div>Hinta(kk): <input type="number" value={liittyma.hinta} onChange={({target})=> setLiittyma({...liittyma, hinta: target.value})}></input></div>
            <button onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
}

export default Addliittyma
