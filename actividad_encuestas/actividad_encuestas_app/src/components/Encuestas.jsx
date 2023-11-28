import React from 'react';

function Encuestas ({encuestas}) {
    return (
        <div>
            <h2>Encuestas Disponibles</h2>
            <ul>
                {encuestas.map(encuesta => (
                    <div key={encuesta.id}>
                       <p>{encuesta.pregunta}</p> 
                        <ul>
                            {encuesta.opciones.map(opcion =>(
                                <li><input type="radio" name={encuesta.id}></input> {opcion}</li>
                            ))}   </ul></div>
                ))}
            </ul>
        </div>
    );
}

export default Encuestas;