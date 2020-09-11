import React, {useState} from 'react'
import liittymaService from '../services/littyma'

const Addliittyma = () => {
    const [liittyma, setLiittyma] = useState({     
        operaattori: "",
        nimi: "",
        puhe: "",
        viestit: "",
        netti: "",
        rajaton: false,
        eu: "",
        hinta: "",
        myynnissa: false
    })
    const [nayta, setNayta] = useState(false)

    const liittymaModel = {
        operaattori: "",
        nimi: "",
        puhe: "",
        viestit: "",
        netti: "",
        rajaton: false,
        eu: "",
        hinta: "",
        myynnissa: false
    }

    const handleClick = (event) => {        
        const newLiittyma = {...liittyma}
        newLiittyma.operaattori = event.target.value
        setLiittyma(newLiittyma)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        
        try {
            await liittymaService.post(liittyma)            
            setLiittyma(liittymaModel)
        } catch (error) {
            console.log(error.message)
            
        }
        
        
        
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

    const handlePiilota = (event) => {
        event.preventDefault()
        nayta?setNayta(false):setNayta(true)
    }

    const handleMyynnissa = (event) => {
        event.preventDefault()
        if(event.target.value === "true"){
            setLiittyma({...liittyma, myynnissa:true}) 
        } else if(event.target.value === "false"){
            setLiittyma({...liittyma, myynnissa:false})
        }
    }

    

    const addLiittymaForm = () => (
        <>
            <div>Operaattori: <button className={(liittyma.operaattori === 'DNA')?'button_selected':''} value="DNA" onClick={handleClick}>DNA</button><button className={(liittyma.operaattori === 'Telia')?'button_selected':''} value="Telia" onClick={handleClick}>Telia</button><button className={(liittyma.operaattori === 'Elisa')?'button_selected':''}value="Elisa" onClick={handleClick}>Elisa</button></div>
            <form onSubmit={handleSubmit}>
                <div>Nimi: <input type="text" value={liittyma.nimi} onChange={({target})=> setLiittyma({...liittyma, nimi: target.value})}></input></div>
                <div>Puhe: <input type="number" value={Number.isInteger(liittyma.puhe)?liittyma.puhe:undefined} onChange={({target})=> setLiittyma({...liittyma, puhe: target.value})}></input><button className={(liittyma.puhe === 'rajaton')?'button_selected':''} value="puhe" onClick={handleRajaton}>Rajaton</button></div>
                <div>Viestit: <input type="number" value={Number.isInteger(liittyma.viestit)?liittyma.viestit:undefined} onChange={({target})=> setLiittyma({...liittyma, viestit: target.value})}></input><button className={(liittyma.viestit === 'rajaton')?'button_selected':''}value="viestit" onClick={handleRajaton}>Rajaton</button></div>
                <div>Netti (nopeus): <input type="number" value={liittyma.netti} onChange={({target})=> setLiittyma({...liittyma, netti: target.value})}></input></div>
                <div>Rajaton netti: <button className={(liittyma.rajaton)?'button_selected':''}value="netti"  onClick={handleRajaton}>Kyllä</button><button className={(!liittyma.rajaton)?'button_selected':''}value="einetti"  onClick={handleRajaton}>Ei</button></div>
                <div>Eu data: <input type="number" value={liittyma.eu} onChange={({target})=> setLiittyma({...liittyma, eu: target.value})}></input></div>
                <div>Hinta(kk): <input type="number" value={liittyma.hinta} onChange={({target})=> setLiittyma({...liittyma, hinta: target.value})}></input></div>
                <div>Myynnissä: <button className={(liittyma.myynnissa)?'button_selected':''}value="true"  onClick={handleMyynnissa}>Kyllä</button><button className={(!liittyma.myynnissa)?'button_selected':''}value="false"  onClick={handleMyynnissa}>Ei</button></div>
                <button type='submit'>Lähetä</button>
                <button onClick={handlePiilota}>Piilota lomake</button>
            </form>
        </>
    )

    return (
        <>
            {nayta?addLiittymaForm():<button onClick={handlePiilota}>Lisää liittyma</button>}
        </>
    )
}

export default Addliittyma
