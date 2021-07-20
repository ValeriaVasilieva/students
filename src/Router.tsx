import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import AddStudent from './pages/AddStudent'
import Students from './pages/Students'
import { PATH_ROOT, PATH_STUDENTS } from './consts/routes'


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PATH_ROOT}>
          <AddStudent />
        </Route>
        <Route path={PATH_STUDENTS}>
          <Students />
        </Route>
        <Redirect to={PATH_ROOT} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
