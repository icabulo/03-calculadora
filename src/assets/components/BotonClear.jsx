import React from "react";
import "../stylesheets/BotonClear.css";

const BotonClear = (props) => (
  <button className="boton-clear" onClick={() => props.manejarClear()}>
    {/* para el onclic, se tiene otra opcion de sintaxis:  onClick={props.manejarClear}, esta segunda opcion no requiere un arrow funtion y hay tener cuidado que el prop manejarClear no debe llevar ()*/}
    {props.children}
    {/* como este valor no va a cambiar tambien se podria colocar unicamente el texto Clear y borrar {props.children} */}
  </button>
);

export default BotonClear;
