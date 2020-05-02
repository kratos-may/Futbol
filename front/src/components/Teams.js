import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import '../resource/Grid.css'
import '../resource/App.css'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import not from '../resource/img/not.jpg'

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      border: '1px solid #e1e1e1',
      boxShadow: '0px 2px 4px 1px rgba(252, 255, 255, 0.918)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
      

    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

const Teams = (props) => {
    const classes = useStyles();
    console.log(props)
    let id= props.TEAM.id
    return ( 
    <Card className={classes.card} style={{ background: '#282c34' }}>
        
        <img src={props.TEAM.crestUrl} alt={not} style={{ margin:'auto',heigth: '120px',width:'100px',marginTop:'10px' }} />
        <CardContent className={classes.cardContent}>
          <Typography  variant="h5" component="h2" style={{textAlign:'center',color: '#FFFFFF',marginTop:'10px'}}>
            {props.TEAM.name}
          </Typography >
          
            <Typography component="h5" style={{ margin:'auto',color: '#FFFFFF',marginTop:'10px' }}>
                Direccion: {props.TEAM.address}
            </Typography>
            <Typography component="h5" style={{ margin:'auto',color: '#FFFFFF',marginTop:'10px' }}>
                Correo: {props.TEAM.email}
            </Typography>
            <Typography component="h5" style={{ margin:'auto',color: '#FFFFFF',marginTop:'10px' }}>
                Fundado en: {props.TEAM.founded}
            </Typography>
       
          
        </CardContent>
            <a href={props.TEAM.website} className="btm btn-outline-success" style={{textAlign:'center',marginTop:'10px'}}>Pagina Oficial</a>
            
            <Link to={"/teams/"+id}  style={{textAlign:'center'}}>
                Ir A Detalles
            </Link>
        
    </Card>
            
     );
}
const mapStateToProps = (state) => {
    return state
  }
export default connect(mapStateToProps)(Teams) 