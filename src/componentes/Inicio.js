import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../animate.css';
import imagen from '../imagenes/veterinariaAnimales.jpg';
import Imagenes from './Imagenes';

export default class Inicio extends Component {
    render() {
        return (
            <div className="center-block quitar-float text-center espacio-arriba">
                <Imagenes imagen={imagen} alt='veterinaria' className='animated fadeIn' />
                <h1 className="pacifico grande verde animated fadeIn retraso-1">Clínica Veterianaria</h1>
                <div className="animated fadeInDown retraso-2">
                    <h2>La Ardilla</h2>
                    <p>Somos una empresa conformada por gente trabajadora</p>
                    <nav className="mediano">
                        <Link to='/contacto' className="espacio-derecha">Conócenos</Link>
                        <Link to='/menu' className="espacio-derecha">Menú</Link>
                        <Link to='/entrar' className="espacio-derecha">Entrar </Link>
                    </nav>
                </div>
            </div>
        );
    }
}


