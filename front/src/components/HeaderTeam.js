import React from 'react';
import {connect} from 'react-redux'
import not from '../resource/img/not.jpg'
const HeaderTeam = (props) => {
    console.log(props)
    return ( 
        <div className="row" style={{ background: '#282c34',color:'#FFFFFF'}}>
                      
            <div className="col-md-4" >
            <div className="row" >
                <div className="col-md-6" style={{ textAlign:'center',width:'100px',marginTop:'10px'}}>
                <img src={props.team.data.crestUrl} alt={not} style={{ textAlign:'center',width:'100px',marginTop:'10px'}}/>
                <div >
                    {props.team.data.tla}
                </div>
                </div>
                <div className="col-md-6" style={{ margin:'auto', color:'#FFFFFF'}}>
                <h2>{props.team.data.name}</h2>
                </div>
            </div>
            </div>

            <div className="col-md-2" style={{textAlign:'center',margin:'auto'}}>
            
            
            </div>
            <div className="col-md-6" style={{ textAlign:'center'}}>
            <div className="row" > 
                <div className="col-md-6" >
                    <label >
                    Fundada En El Año: {props.team.data.founded}
                    </label> 
                    <label >Telefono: {props.team.data.phone}</label> 
                    <label >Estadio: {props.team.data.venue}</label> 
                    <div>
                <a href={props.id+'/matches'} className="btm btn-outline-success" >Ultimos Juegos</a>
            </div>
                </div>
                <div className="col-md-6" >
                    <label >Direccion: {props.team.data.address}</label> 
                    <label >Correo: {props.team.data.email}</label> 
                    <div>
            <a href={props.team.data.website} className="btm btn-outline-success" >Pagina Oficial</a>
            
            </div>
                </div>
            </div>
            </div>
        </div>
     );
}
 
const mapStateToProps = (state) => {
    return state
  }
export default connect(mapStateToProps)(HeaderTeam) 