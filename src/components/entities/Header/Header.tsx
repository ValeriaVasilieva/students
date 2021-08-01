import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { PATH_STUDENTS } from '@consts/routes'

import { Container } from '@components/styled/Container'

import * as SC from './styled'


const Header: FC = () => (
  <SC.Base>
    <Container>
      <SC.Content>
        <Link to={PATH_STUDENTS}>
          <SC.LogoDoubletapp />
        </Link>
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
