import React,{useEffect,Fragment} from 'react';
import {connect} from 'react-redux'

import {consultaTeams} from '../redux/actions/TeamsAction'
import Header from '../components/Header'
import Teams from '../components/Teams'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import '../resource/Grid.css'
import '../resource/App.css'
import { BounceLoader } from 'react-spinners'

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

const Home = (props) => {
    const classes = useStyles();
    useEffect(()=>{
        props.dispatch(consultaTeams())
    },[])
    console.log(props)
    return (
        <Fragment>
           {props.teams.isFetching
           ?(<div className="App-body"><BounceLoader/></div>)
           :( 
            <Fragment>
                <Header/>
                <main style={{ background: '#282c34' }}>
                   <Container className={classes.cardGrid} maxWidth="md" >
                        <Grid container spacing={4}>
                            {props.teams.data.map(TEAM=>(
                                <Grid item key={TEAM.id} xs={12} sm={6} md={6}>
                                    <Teams TEAM ={TEAM} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </main>
            </Fragment>     
            )}
            
        </Fragment>
    );
}
const mapStateToProps = (state) => {
    return state
  }
export default connect(mapStateToProps)(Home) 