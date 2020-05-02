import React,{Fragment,useEffect} from 'react'
import {connect} from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {consultaMatches} from '../redux/actions/MatchesAction'
import '../resource/App.css'
import { BounceLoader } from 'react-spinners'
import * as moment from 'moment';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  


const Matches = (props) => {
    const classes = useStyles();
    const url= props.match.url
    useEffect(()=>{
      props.dispatch(consultaMatches(url))
      
  },[])


    return(
            <Fragment>
           {props.Matches.isFetching
           ?(
               <div className="App-body"><BounceLoader/></div>
                
            )
           :( 
                <Fragment>
                   <div>
                      <div className="row" >
                          <div className="col-md-12" style={{ background: '#000000',textAlign:'center',color:'#FFFFFF'}}>
                            <h2>Ultimos partidos</h2>
                          </div>
                          <div className="col-md-12" >
                            <TableContainer component={Paper} style={{ background: 'linear-gradient(to bottom,#11969C, #1901EA)',textAlign:'center',color:'#FFFFFF'}}>
                              <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                  <TableRow>
                                    <TableCell>COMPETEICION</TableCell>
                                    <TableCell align="right">VISITANTE</TableCell>
                                    <TableCell align="right">LOCAL</TableCell>
                                    <TableCell align="right">FECHA</TableCell>
                                    <TableCell align="right">GOLES/VISITANTE</TableCell>
                                    <TableCell align="right">GOLES/LOCAL</TableCell>
                                    <TableCell align="right">GANADOR</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {props.Matches.data.matches.map((mat) => (
                                    <TableRow key={mat.id}>
                                      <TableCell component="th" scope="row">
                                        {mat.competition.name}
                                      </TableCell>
                                      <TableCell align="right">{mat.awayTeam.name}</TableCell>
                                      <TableCell align="right">{mat.homeTeam.name}</TableCell>
                                      <TableCell align="right">{moment(mat.lastUpdated,"YYYY-MM-DDTHH:mm:ss.SSS").format("DD-MM-YYYY")}</TableCell>
                                      <TableCell align="center">{mat.score.fullTime.homeTeam}</TableCell>
                                      <TableCell align="center">{mat.score.fullTime.awayTeam}</TableCell>
                                      <TableCell align="right">{mat.score.winner}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </div>
                      </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    )
}


const mapStateToProps = (state) => {
    return state
  }
export default connect(mapStateToProps)(Matches) 