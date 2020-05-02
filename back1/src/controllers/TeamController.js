const axios=require( 'axios');
const url = 'http://api.football-data.org/v2';


exports.obtenerTodosEquipos= (req,res,next)=>{
    const patch = req.url;

    let equipos = [];
    axios({
        "method":"GET",
        "url":url+patch,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"football-data1.p.rapidapi.com",
        "X-Auth-Token":"62a786f502204fa2ba8cdf887a810f23"
        }
        })
        .then((response)=>{
           
          equipos= response.data.teams
          res.send(equipos)
        })
        .catch((error)=>{
          console.log(error)
        })
    
}
exports.obtenerEquipo= (req,res,next)=>{
    const patch = req.url;

    let equipo = [];
    axios({
        "method":"GET",
        "url":url+patch,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"football-data1.p.rapidapi.com",
        "X-Auth-Token":"62a786f502204fa2ba8cdf887a810f23"
        }
        })
        .then((response)=>{
           
          equipo=response.data
          res.send(equipo)
        })
        .catch((error)=>{
          console.log(error)
        })
    
}
exports.obtenerUltimosPartidos= (req,res,next)=>{
    const patch = req.url;

    let ultimosPartidos = [];
    axios({
        "method":"GET",
        "url":url+patch,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"football-data1.p.rapidapi.com",
        "X-Auth-Token":"62a786f502204fa2ba8cdf887a810f23"
        }
        })
        .then((response)=>{
           
          ultimosPartidos = response.data
          res.send(ultimosPartidos)
        })
        .catch((error)=>{
          console.log(error)
        })
    
}
exports.obtenerDatosJugador= (req,res,next)=>{
  const patch = req.url;

  let jugador = [];
  axios({
      "method":"GET",
      "url":url+patch,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"football-data1.p.rapidapi.com",
      "X-Auth-Token":"62a786f502204fa2ba8cdf887a810f23"
      }
      })
      .then((response)=>{
         
        jugador = response.data
        console.log(jugador)
        res.send(jugador)
      })
      .catch((error)=>{
        console.log(error)
      })
  
}