import styled from 'styled-components'

import arrowLeft from '../../../assets/icons/arrow-left.svg'
import { TextSmall } from '../../styled/Texts'


export const Base = styled.div`
  margin-top: 25px;
`

export const Link = styled(TextSmall)`
  text-decoration: none;
  text-transform: uppercase;

  &::before {
    content: url(${arrowLeft});
    vertical-align: middle;
    padding-right: 16px;
  }
`
