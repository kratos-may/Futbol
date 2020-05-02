import {FECHT_REQUESTT,FECHT_SUCCESSS} from '../actions/TeamAction'
const initialState={
        data: {
            activeCompetitions:[],
            address:"",
            area:{},
            clubColors: "",
            crestUrl: "",
            email: "",
            founded: 0,
            id: 0,
            lastUpdated: "",
            name: "",
            phone: "",
            shortName: "",
            squad:[{}],
            tla: "",
            venue: "",
            website: ""
        },
        isFetching: false
        
 }

 function team (state= initialState,action){
     switch (action.type){
        case FECHT_REQUESTT:
            return{ 
                ...state,
                isFetching: true
            }
        case FECHT_SUCCESSS:
            return{
                ...state,
                isFetching: false,
                data: action.payload.data
            }
       
         default:
         return state
     }
 }
 export default team