
import React, { Component } from 'react';
//import '../App.css';
//import '../animate.css';
//import FacebookLogin from './FacebookLogin/FacebookLogin';
import Encabezado from './../Encabezado';
import Navegacion from './../Navegacion';


export default class FacebookLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggerstatus: false,
            userID: ''
        }
    }

    componentDidMount() {
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: '145041256213030',
                xfbml: true,
                version: 'v2.11'
            });
            window.FB.Event.subscribe("auth.statusChange", response => {
                this.statusChangeCallBack(response)
            });

            this.checkLoginStatus();
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    statusChangeCallBack(response) {
        console.log(response);
        if (response.status === "connected") {
            this.setState({
                loggerstatus: true,
                userID: response.authResponse.userID
            });
            this.getPersonalData();
        } else {
            this.setState({
                loggerstatus: false
            });
        }
    }

    checkLoginStatus() {
        window.FB.getLoginStatus(response => this.statusChangeCallBack(response));
    }

    getPersonalData() {
        let url = "/" + this.state.userID + "?fields=name,picture";
        window.FB.api(url, response => {
            console.log(response);
            this.setState({
                name: response.name,
                picture: response.picture.data.url
            });
        });
    }

    showPersonalData() {
        if (this.state.loggerstatus) {
            return (
                <div>
                    <p>Bienvenido, {this.state.name}</p>
                    <img src={this.state.picture} alt="foto no encontrada" />
                </div>
            );
        } else {
            return (
                <p> No está conectado</p>
            );
        }
    }

    render() {
        return (
            <div>
                <Navegacion />
                <div className="App">
                    <Encabezado className="pacifico grande azul animated fadeIn" text="Entrar" />
                    {this.showPersonalData()}
                    <div className="fb-login-button"
                        data-max-rows="1"
                        data-size="large"
                        data-button-type="continue_with"
                        data-show-faces="false"
                        data-auto-logout-link="true"
                        data-use-continue-as="false">
                    </div>

                </div>


            </div>

        );
    }


}
