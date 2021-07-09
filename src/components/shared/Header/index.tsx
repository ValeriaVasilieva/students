import React, { FC } from 'react'

import { Container } from '../../styled/Container'

import * as SC from './styled'


const Header: FC = () => {
  return (
    <SC.Base>
      <Container>
        <SC.Flex>
          <SC.LogoDoubletapp></SC.LogoDoubletapp>
          <SC.Text as={'p'} uppercased>
            Students&ensp;
          </SC.Text>
          <SC.Text as={'p'}>by&ensp;</SC.Text>
          <SC.Text as={'p'} color={'mainTheme'}>
            ValeriaVasilieva
          </SC.Text>
        </SC.Flex>
      </Container>
    </SC.Base>
  )
}

export default Header
