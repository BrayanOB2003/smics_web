import React from "react";

function Welcome() {
    return(
    <div className='primary'>
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