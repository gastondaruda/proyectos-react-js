import React, {useState} from "react";
import Pantalla from "./calc-component/Pantalla";
import Boton from "./calc-component/Boton";
import BotonClear from "./calc-component/BotonClear";
import { evaluate, e, pi, sqrt } from "mathjs";
import "./calculadora.css"

function Calculadora(){
    const [input, setInput] = useState("");

    const agregarInput = val => {
        setInput(input + val);
    };

    const calcularResultado = () => {
        if( input ) {
            setInput(evaluate(input));
        } else{
            alert("Ingresa un valor")
        }
    }

    const valor = (val) => {
        setInput(input + val)
    }
    const raizCuadrada = () => {
        if(input){
            setInput(sqrt(input))
        }else {
            alert("Ingresa un número par obtener la raíz cuadrada")
        }
    }

    return(
        <main className="mainSection">
            <div className="contenedor-calculadora">
                <Pantalla input={input}/>
                <div className="fila">
                    <BotonClear manejarClear={() => setInput("")}>AC</BotonClear>
                    <Boton manejarClick={() => valor(e)}>e</Boton>
                    <Boton manejarClick={() => valor(pi)}>π</Boton>
                    <Boton manejarClick={() => raizCuadrada()}>√</Boton>
                </div>
                <div className="fila">
                    <Boton manejarClick={agregarInput}>1</Boton>
                    <Boton manejarClick={agregarInput}>2</Boton>
                    <Boton manejarClick={agregarInput}>3</Boton>
                    <Boton manejarClick={agregarInput}>+</Boton>
                </div>
                <div className="fila">
                    <Boton manejarClick={agregarInput}>4</Boton>
                    <Boton manejarClick={agregarInput}>5</Boton>
                    <Boton manejarClick={agregarInput}>6</Boton>
                    <Boton manejarClick={agregarInput}>-</Boton>
                </div>
                <div className="fila">
                    <Boton manejarClick={agregarInput}>7</Boton>
                    <Boton manejarClick={agregarInput}>8</Boton>
                    <Boton manejarClick={agregarInput}>9</Boton>
                    <Boton manejarClick={agregarInput}>*</Boton>
                </div>
                <div className="fila">
                    <Boton manejarClick={calcularResultado}>=</Boton>
                    <Boton manejarClick={agregarInput}>0</Boton>
                    <Boton manejarClick={agregarInput}>.</Boton>
                    <Boton manejarClick={agregarInput}>/</Boton>
                </div>
                {/* <div className="fila">
                    <BotonClear manejarClear={() => setInput("")}>clear</BotonClear>
                </div> */}
            </div>
        </main>
    )
}
export default Calculadora