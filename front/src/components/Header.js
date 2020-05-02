import React from 'react'
import '../resource/Grid.css'
import '../resource/App.css'
import logoP from '../resource/logo.svg'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => {
    return ( 
        <AppBar position="relative" style={{ background: '#282c34' }}>
            <Toolbar>
                <img src={logoP} className="App-logo"/>
                <Typography variant="h4" color="inherit" noWrap>
                    Equipos Primera Division Liga Española
                </Typography>
            </Toolbar>
           
        </AppBar>
        
    );
}
 
export default Header;