import React from "react";
import { FaTrashAlt } from 'react-icons/fa';

function Tarea({id,texto, completada, completarTarea, eliminarTarea}) {
    return(
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div 
                className="tarea-texto"
                onClick={() => completarTarea(id)}
                >
                {texto}
            </div>
            <div className="tarea-icono">
                <FaTrashAlt 
                    onClick={() => eliminarTarea(id)}
                />
            </div>
        </div>

    )
}

export default Tarea