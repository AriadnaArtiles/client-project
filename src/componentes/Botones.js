import React from 'react';
import { Link } from 'react-router-dom';

const Botones = props => {
    return (
        <div>
            <button>
                <Link to={props.ruta}>{props.text} </Link>
            </button>
        </div>
    )
}
export default Botones