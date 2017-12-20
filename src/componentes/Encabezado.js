import React from 'react';
import '../App.css';

const Encabezado = props => {
    return (
        <div>
            <h1 className="pacifico grande azul animated fadeIn">{props.text}</h1>
        </div>
    )
}
export default Encabezado
