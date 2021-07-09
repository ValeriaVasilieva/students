import styled from 'styled-components'

import { Headings, Texts } from '../../styled/Texts'
import arrowLeft from '../../../assets/icons/arrow-left.svg'


export const Base = styled.div`
  margin-top: 21px;
`

export const Link = styled(Texts)`
  text-decoration: none;
  text-transform: uppercase;

  &::before {
    content: url(${arrowLeft});
    vertical-align: middle;
    padding-right: 16px;
  }
`

export const Header = styled(Headings).attrs({ main: true })``

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`

export const Fieldset = styled.fieldset`
  border: none;
  width: 380px;
  margin-right: 100px;

  &:nth-child(1) {
    width: 100%;
  }

  &:nth-child(3) {
    margin-right: 0;
  }

  &:last-child {
    margin-top: 25px;
  }
`
