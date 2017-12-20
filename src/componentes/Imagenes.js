import React from 'react';

const Imagenes = props => {
    return (
        <div>
            <img src={props.imagen} alt={props.alt} className='animated fadeIn' />
        </div>
    )
}
export default Imagenes