export const FECHT_REQUESTT = 'FECHT_REQUESTT'
export const FECHT_SUCCESSS = 'FECHT_SUCCESSS'

export const consultaTeam = (props) =>(dispatch)=>{
   
    dispatch({type: FECHT_REQUESTT })
    
    fetch('http://localhost:3000'+props)
        .then(res => res.json())
            .then(data =>{
                dispatch({
                    type: FECHT_SUCCESSS,
                    payload:{ 
                        data
                    }
                })
            })
            .catch(error => console.log(error))

}


