import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom'

import Route from './Route';

import Logon from '../pages/Logon'
import Register from '../pages/Register'
import Profile from '../pages/Profile'
import NewIncident from '../pages/NewIncident'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Logon} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/incidents/new" component={NewIncident} isPrivate />
      </Switch>
    </BrowserRouter>
  )
}

/*
<Route exact path="/" component={() => (<h1>gg</h1>)} />
<Route path="*" component={() => (<h1>404</h1>)} />
*/

export default Routes
