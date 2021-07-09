import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Students from './pages/Students'
import CounterComponent from './store/CounterComponent'
import { PATH_ROOT, PATH_STUDENTS } from './consts/routes'


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={PATH_ROOT}>
          <Login />
        </Route>
        <Route path={PATH_STUDENTS}>
          <Students />
        </Route>
        <Route path="/testsM">
          {/* Чтобы работал добавь observer */}
          <CounterComponent />
        </Route>
        <Redirect to={PATH_ROOT} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
