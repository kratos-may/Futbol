import React from 'react';
import logo from '../resource/logo.svg';
import '../resource/App.css';


const Logo= () =>{
    return(
    
         <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Liga Española BBVA
                </p>
                <a className="App-link" href="/competitions/2014/teams">Iniciar</a>
                
            </header>
        </div>
    );
}
export default Logo;