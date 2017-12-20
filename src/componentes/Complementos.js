import React from 'react';

const Complementos = props => {
    return (
        <div className="container">
            <div container="row" >
                <h2 className="pacifico animated fadeInDown">{props.text}</h2>
                <p >{props.p}</p>
            </div>
        </div>
    )
}
export default Complementos