import React, { FC } from 'react'

import Header from '../Header'

import * as SC from './styled'


const Layout: FC = ({ children }) => {
  return (
    <SC.Base>
      <Header />
      {children}
    </SC.Base>
  )
}

export default Layout
