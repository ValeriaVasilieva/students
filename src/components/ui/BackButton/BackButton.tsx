import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Container } from '@components/styled/Container'

import * as SC from './styled'


type Props = {
  path: string
  text: string
}

const BackButton: FC<Props> = ({ path, text }) => (
  <SC.Base>
    <Container>
      <Link to={path} style={{ textDecoration: 'none' }}>
        <SC.Link>{text}</SC.Link>
      </Link>
    </Container>
  </SC.Base>
)

export default BackButton
