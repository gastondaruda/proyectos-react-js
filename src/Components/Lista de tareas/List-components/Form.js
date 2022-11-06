import React, {useState} from "react"
import {v4 as uuidv4 } from "uuid"


function Form(props){

    const [input, setInput] = useState("")
    
    const manejarCambio = e => {
        setInput(e.target.value);
    }


    const manejarEnvio = e => {
        e.preventDefault();
        const fecha = new Date();
        const hoy = fecha.getDate();
        const mesActual = fecha.getMonth() + 1; 

        const tareaNueva = {
            date: hoy + "/" + mesActual,
            id: uuidv4(),
            texto: input,
            completada: false
        }
        console.log(tareaNueva)
        props.onSubmit(tareaNueva);
        
    }


    return(
        <form 
            className="tarea-formulario"
            onSubmit={manejarEnvio}
            >
            <input 
                className="tarea-input"
                type="text"
                placeholder="Escribe una tarea"
                name="texto"
                onChange={manejarCambio}
            />
            <button
            type="submit"
                className="tarea-btn"
                >
                Agregar Tarea
            </button>
        </form>
    )
}

export default Form