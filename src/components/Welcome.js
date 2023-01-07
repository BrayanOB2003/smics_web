import React from "react";
import "../css_stylesheets/Welcome.css"

function Welcome() {
    return(
    <div className='primary'>
        <h1>Bienvenidos</h1>
        <img 
            className='logo-img'
            src={require('../imgs/logo.png')}
            alt='Logo'
        />
        <button className="register-button">Registrar</button>
    </div>
    );
  }

export default Welcome;