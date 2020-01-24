import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './App'
import List from './Components/List'
import Pokemon from './Components/Pokemon'

export default (
    <Switch>
        <Route path='/pokemon/:id' component={Pokemon}/>
        <Route path='/list' component={List} />
        <Route path='/' exact component={App}/>
    </Switch>
)