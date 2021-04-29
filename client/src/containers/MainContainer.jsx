import React from 'react'
import { Route } from 'react-router-dom';
import Wines from '../screens/Wines';
import { getAllWines } from '../services/wines'

export default function MainContainer() {
  return (
    <div>
      <h1>Main Container</h1>
      <Route path='/wines'>
          <Wines
            allWines={getAllWines}
          />
        </Route>
    </div>
  )
}
