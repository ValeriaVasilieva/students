import React from 'react'

import { Container } from '../../styled/Container'

import * as SC from './styled'


const Header = () => {
  return (
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
}

export default Header
