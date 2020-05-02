import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import Logo from './components/Logo';
import Home from './components/Home';
import Team from './components/Team';
import Matches from './components/Matches';
import store from './redux/store'
import './resource/App.css';

function App() {
  return (

    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Logo} />
          <Route path='/competitions/2014/teams' component={Home}/>
          <Route path='/teams/:id' exact component={Team}/>
          <Route path='/teams/:id/matches' component={Matches}/>
        </Switch>
      </BrowserRouter>
     
    </Provider>
  );
}

export default App;
