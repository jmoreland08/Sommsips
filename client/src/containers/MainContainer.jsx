import React from 'react'
import { Route } from 'react-router-dom';
import Home from '../Home/Home'
  
export default function MainContainer() {
  return (
    <div>
      <Switch>
      <Route path='/'>
    <Home />
        </Route>
        </Switch>
    </div>
  )
}
