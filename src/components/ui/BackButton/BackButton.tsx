import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Container } from '../../styled/Container'

import * as SC from './styled'


type Props = {
  path: string
  text: string
}

const BackButton: FC<Props> = ({ path, text }) => {
  return (
    <SC.Base>
      <Container>
        <Link to={path} style={{ textDecoration: 'none' }}>
          <SC.Link>{text}</SC.Link>
        </Link>
      </Container>
    </SC.Base>
  )
}

export default BackButton
