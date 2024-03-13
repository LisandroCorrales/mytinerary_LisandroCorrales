import {useState} from "react"
import CarrouselItem from "./CarrouselItem"

const Carrousel = ({ciudades}) => {

    const ciudades12 = ciudades.slice(0,12)
    console.log(ciudades12) //12 ciudades
    const [ciudad,setCiudad] = useState(ciudades[0]);
    const [indice, setIndice] = useState(0);


    const next = () =>{
        let aux = indice == 11 ? 0 : indice + 1
        setIndice(aux)
        setCiudad(ciudades[aux])
    }
    const prev = () =>{
        let aux = indice == 0 ? 11 : indice - 1
        setIndice(aux)
        setCiudad(ciudades[aux])
    }

    return (
        <div className="flex gap-3 px-3 justify-center">
            <button className="w-5" onClick={prev}><img src="/flechaIzquierda.png" alt="" /></button>
            <CarrouselItem ciudad={ciudad}/>
            <button className="w-5" onClick={next}><img src="/flechaDerecha.png" alt="" /></button>
        </div>
    )
}

export default Carrousel