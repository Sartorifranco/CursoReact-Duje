// rafce para crear el componente
import { useState, useEffect } from "react"

const PruebasHooks = ({contador, setContador}) => {

    //useState
    const [img, setImg] = useState('')

    useEffect(()=>{
       setImg('https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')
    }, [])

    return (
    <div>
        <h4>{contador}</h4>
        <button onClick={ () => setContador(contador +1)}>Aumentar</button>
        <button onClick={ () => setContador(contador -1)}>Disminuir</button>
        <img src={img} alt=''/>
    </div>
  )
}

export default PruebasHooks