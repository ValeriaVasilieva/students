import React from 'react'
import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './consts/appTheme'
import Router from './Router'


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router />
    </ThemeProvider>
  )
}

export default App
