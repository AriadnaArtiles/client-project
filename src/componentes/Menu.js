import React, { Component } from 'react';
import '../App.css';
import '../animate.css';
import Navegacion from './Navegacion';
import Encabezado from './Encabezado';
import Complementos from './Complementos';
import Imagenes from './Imagenes';
import imagen2 from '../imagenes/veterinaria4.jpg';
import imagen3 from '../imagenes/veterinaria2.jpg';
import imagen4 from '../imagenes/veterinariatres.jpg';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <Navegacion />
                <div className="App">
                    <Encabezado text="Menú" />
                    <p>Sus mascotas seran cuidadas con la mejor calidad</p>
                    <div className="text-center row">
                        <div className="col-md ">
                            <Complementos text="Vacunas" p="Disponemos de todas las vacunas necesarias para el cuidado de su mascota" />
                            <Imagenes imagen={imagen2} alt='veterinaria' className='animated fadeIn' />
                        </div>
                        <div className="col-md ">
                            <Complementos text="Cuidados" p="Tu mascota estará muy bien cuidada y vigilada en todo momento" />
                            <Imagenes imagen={imagen3} alt='veterinaria' className='animated fadeIn' />
                        </div>
                        <div className="col-md ">
                            <Complementos text="Los mejores profesionales" p="En nuestra clínica veterinaria disponemos de los mejores veterinarios" />
                            <Imagenes imagen={imagen4} alt='veterinaria' className='animated fadeIn' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}