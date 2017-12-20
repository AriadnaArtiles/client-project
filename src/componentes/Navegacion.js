import React from 'react';
import { Link } from 'react-router-dom';

const Navegacion = props => {
    return (
        <div>
            <nav className="se-gris padding-largo">
                <ul className="no-lista row text-center d-inline">
                    <li className="col-md-3 ">
                        <Link to='/' className="espacio-derecha pacifico verde">La Ardilla</Link>
                    </li>
                    <li className="col-md-3 ">
                        <Link to='/contacto' className="espacio-derecha">Conócenos</Link>
                    </li>
                    <li className="col-md-3 ">
                        <Link to='/menu' className="espacio-derecha">Menú</Link>
                    </li>
                    <li className="col-md-3 ">
                        <Link to='/entrar' className="espacio-derecha">Entrar</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Navegacion