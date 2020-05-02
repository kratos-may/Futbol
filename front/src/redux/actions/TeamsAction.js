export const FECHT_REQUEST = 'FECHT_REQUEST'

export const FECHT_SUCCESS = 'FECHT_SUCCESS'

export const consultaTeams = () =>(dispatch)=>{
    dispatch({type: FECHT_REQUEST })
    
    fetch('http://localhost:3000/competitions/2014/teams')
        .then(res => res.json())
            .then(data =>{
                dispatch({
                    type: FECHT_SUCCESS,
                    payload:{ 
                        data
                    }
                })
            })
            .catch(error => console.log(error))

}
