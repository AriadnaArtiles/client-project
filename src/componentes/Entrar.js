
import React, { Component } from 'react';
import '../App.css';
import '../animate.css';
import Encabezado from './Encabezado';
import Navegacion from './Navegacion';
import imagen from '../imagenes/veterinariaAnimales.jpg';
import Imagenes from './Imagenes'

export default class Entrar extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            terms: false
        }
    }
    render() {
        return (
            <div>
                <Navegacion />
                <div className="App">
                    <Encabezado className="pacifico grande azul animated fadeIn" text="Entrar" />
                    <div>
                        <p>Introduzca su clave</p>
                        <input type="text" value={this.state.name} onChange={this.updateName.bind(this)} />
                        <div className="App">
                            <label>
                                <input type="checkbox" checked={this.state.terms} onClick={this.updateTerms.bind(this)} />acepto las condiciones
                            </label>
                        </div>
                        <button onClick={this.sayHi.bind(this)}>Aceptar</button>
                    </div>
                    <Imagenes imagen={imagen} alt='veterinaria' className='animated fadeIn' />
                </div>

            </div>
        );
    }

    updateTerms(event) {
        this.setState({
            terms: event.target.checked
        });
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        });
    }

    sayHi() {
        if (this.state.terms) {
            alert('hola ' + this.state.name);
        } else {
            alert("debes aceptar las condiciones");
        }

    }
}
