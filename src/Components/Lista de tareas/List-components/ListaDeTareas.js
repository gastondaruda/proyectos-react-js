import React, {useState} from "react";
import Form from "./Form"
import Tarea from "./Tarea"

function ListDeTareas(){

    const [tareas, setTareas] = useState([] || localStorage.getItem("Tareas"))

    const agregarTarea = tarea => {
        if( tarea.texto.trim()) {
            tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas]
            setTareas(tareasActualizadas)
            localStorage.setItem("Tareas", JSON.stringify(tareasActualizadas))
        }
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)
        setTareas(tareasActualizadas)
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map( tarea => {
            if (tarea.id === id){
                tarea.completada = !tarea.completada;
            }
            return tarea
        });
        setTareas(tareasActualizadas)
    }

    const recuperarInfo = () => {
        if(localStorage.getItem("Tareas")){
            setTareas(localStorage.getItem("Tareas"))
        } else {
            setTareas([])
        }
    }


    return(
        <>
            <Form 
                onSubmit={agregarTarea}
            />
            { 
                (tareas.length !== 0) ? 
                tareas.map((tarea) => 
                <Tarea
                    key={tarea.id}
                    id={tarea.id}
                    texto={tarea.date + " " + tarea.texto}
                    completada={tarea.completada}
                    completarTarea={completarTarea}
                    eliminarTarea={eliminarTarea}
                />
                )
                : 
                <h3>
                    No hay tareas
                </h3>
            }
        </>
    )
}

export default ListDeTareas