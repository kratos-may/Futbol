import {FECHT_REQUEST,FECHT_SUCCESS} from '../actions/TeamsAction'
const initialState={
        data: [],
        isFetching: false
        
 }

 function teams (state= initialState,action){
     switch (action.type){
        case FECHT_REQUEST:
            return{
                ...state,
                isFetching: true
            }
        case FECHT_SUCCESS:
            return{
                ...state,
                isFetching: false,
                data: action.payload.data
            }
       
         default:
         return state
     }
 }
 export default teams