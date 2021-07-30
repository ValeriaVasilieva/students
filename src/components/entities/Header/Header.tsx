import React, { FC } from 'react'

import { Container } from '@components/styled/Container'

import * as SC from './styled'


const Header: FC = () => (
  <SC.Base>
    <Container>
      <SC.Content>
        <SC.LogoDoubletapp />
        <SC.TextContent>
          <SC.AuthorSign as={'p'}>Students&ensp;</SC.AuthorSign>
          <SC.AuthorSignPretext as={'p'}>by&ensp;</SC.AuthorSignPretext>
          <SC.Author as={'p'} color={'mainTheme'}>
            ValeriaVasilieva
          </SC.Author>
        </SC.TextContent>
      </SC.Content>
    </Container>
  </SC.Base>
)

export default Header
