import React,{useEffect, Fragment}  from 'react';
import {connect} from 'react-redux'
import {consultaTeam} from '../redux/actions/TeamAction'
import HeaderTeam from './HeaderTeam'
import '../resource/App.css'
import { BounceLoader } from 'react-spinners'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const Team = (props) => {
    
    const endpoint=props.match.url;
    
    useEffect(()=>{
        props.dispatch(consultaTeam(endpoint))
        
    },[])
    console.log(props)
    return ( 
        <Fragment>
           {props.team.isFetching
           ?(
               <div className="App-body"><BounceLoader/></div>
                
            )
           :( 
                <Fragment>
                    <div>
                      <HeaderTeam team={props.team} id={props.match.url}/>
                    </div>

                    <div>
                    <div className="row" >
                        <div className="col-md-12" style={{ background: '#000000',textAlign:'center',color:'#FFFFFF'}}>
                          <h2>Plantilla de Jugadores</h2>
                        </div>
                        <div className="col-md-12" style={{ background: 'linear-gradient(to bottom,#11969C, #1901EA)',textAlign:'center',color:'#FFFFFF'}}>
                          <List component="nav" aria-label="contacts">
                            {props.team.data.squad.map(players=>(
                              <ListItem button key={players.id}>
                                <ListItemText primary="Numero Camiseta" secondary={players.shirtNumber} style={{ color:'#FFFFFF'}}/>
                                <ListItemText primary="Nombre" secondary={players.name} style={{ color:'#FFFFFF'}} />
                                <ListItemText primary="Nacionalidad" secondary={players.nationality} style={{ color:'#FFFFFF'}}/>
                                <ListItemText primary="Posicion" secondary={players.position} style={{ color:'#FFFFFF'}}/>
                                <ListItemText primary="Rol" secondary={players.role} style={{ color:'#FFFFFF'}}/>
                              </ListItem>
                            ))}
                          </List>
                        </div>
                    </div>
                    </div>
                </Fragment>
            )}
        </Fragment>            

     );
     }
const mapStateToProps = (state) => {
    return state
  }
export default connect(mapStateToProps)(Team) 