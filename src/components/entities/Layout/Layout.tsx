import React, { FC } from 'react'

import Header from '@components/entities/Header'

import * as SC from './styled'


const Layout: FC = ({ children }) => (
  <SC.Base>
    <Header />
    {children}
  </SC.Base>
)

export default Layout
