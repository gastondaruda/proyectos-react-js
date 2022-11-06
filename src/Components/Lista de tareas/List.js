import React from "react"
import ListDeTareas from "./List-components/ListaDeTareas"
import "./lista.css"


function ListaDeTareas() {
    return(
        <main className="tarea-lista-principal">
            <div className="lista-container">
                <h1 className="lista-title">Mis tareas</h1>
                <ListDeTareas />
            </div>
        </main>
    )
}

export default ListaDeTareas