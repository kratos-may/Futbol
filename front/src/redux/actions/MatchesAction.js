export const MATCHES_REQUEST = 'MATCHES_REQUEST'
export const MATCHES_SUCCESS = 'MATCHES_SUCCESS'

export const consultaMatches = (props) =>(dispatch)=>{
    console.log(props)
    dispatch({type: MATCHES_REQUEST })
    
    fetch('http://localhost:3000'+props)
        .then(res => res.json())
            .then(data =>{
                dispatch({
                    type: MATCHES_SUCCESS,
                    payload:{ 
                        data
                    }
                })
            })
            .catch(error => console.log(error))

}

