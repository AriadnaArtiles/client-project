import React, { Component } from 'react';
import '../App.css';
import '../animate.css';
import Encabezado from './Encabezado';
import Navegacion from './Navegacion';
import Mapa from './Mapa';

export default class Contacto extends Component {
    render() {
        return (
            <div>
                <Navegacion />
                <div className="App">
                    <Encabezado className="pacifico grande azul animated fadeIn" text="Contacto" />
                    <p>Autovia Gran Canaria, Km. 8, 35212 Telde, Las Palmas</p>
                    <p> Escribemos a<a href="mailto:ariadn.a.cuario@gmail.com"> ariadn.a.cuario@gmail.com</a></p>
                    <Mapa />
                </div>
            </div>
        );
    }
}
