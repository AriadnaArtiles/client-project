import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Inicio from './componentes/Inicio';
import Menu from './componentes/Menu';
import Contacto from './componentes/Contacto';
import Lista from './componentes/Lista';
import Entrar from './componentes/Entrar';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/lista" component={Lista} />
        <Route exact path="/contacto" component={Contacto} />
        <Route exact path="/entrar" component={Entrar} />
      </div>
    );
  }
}
export default App;
