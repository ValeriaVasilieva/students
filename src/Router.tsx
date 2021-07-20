import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import AddStudent from './pages/AddStudent'
import Students from './pages/Students'
import { PATH_ROOT, PATH_STUDENTS } from './consts/routes'


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PATH_STUDENTS}>
          <Students />
        </Route>
        <Route path={PATH_ROOT}>
          <AddStudent />
        </Route>
        <Redirect to={PATH_STUDENTS} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
