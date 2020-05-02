const axios=require( 'axios');
const url = 'http://api.football-data.org/v2/competitions/';

exports.ObtenerLigas= async (req,res,next)=>{
        let ligas=[];
        axios.get(url)
            .then(response => {
                ligas= response.data,
                res.send(ligas)

            })
            .catch(e=>console.log(e));
}
exports.obtenerUnaLiga= (req,res,next)=>{
    const id = req.params.id;

    let liga = {};
    axios({
        "method":"GET",
        "url":url+id,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"football-data1.p.rapidapi.com",
        "X-Auth-Token":"62a786f502204fa2ba8cdf887a810f23"
        }
        })
        .then((response)=>{
            liga=response.data;
            console.log(liga);
          res.send(liga);
        })
        .catch((error)=>{
          console.log(error)
        })
    
}