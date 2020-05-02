import { combineReducers } from 'redux'
import teams from './TeamsReducer'
import team from './TeamReducer'
import Matches from './MartchesReducer'
export default combineReducers({
 teams,
 Matches,
 team
 
})