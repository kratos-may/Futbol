import {MATCHES_REQUEST,MATCHES_SUCCESS} from '../actions/MatchesAction'
const initialState={
        data: {
            
            count:"",
            filter:{},
            matches:[{
                awayTeam: {},
                competition: {},
                group: "",
                homeTeam: {},
                id: 0,
                lastUpdated: "",
                matchday: 0,
                odds: {},
                referees:[{}],
                score: {winner: "", duration: "", fullTime: {}, halfTime: {}, extraTime: {}},
                season: {},
                stage: "",
                status: "",
                utcDate: ""
            }]
        },
        isFetching: false
        
 }

 function Matches (state= initialState,action){
     switch (action.type){
        case MATCHES_REQUEST:
            return{ 
                ...state,
                isFetching: true
            }
        case MATCHES_SUCCESS:
            return{
                ...state,
                isFetching: false,
                data: action.payload.data
            }
       
         default:
         return state
     }
 }
 export default Matches