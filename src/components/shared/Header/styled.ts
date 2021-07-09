import styled from "styled-components"

import { Headings } from '../../styled/Texts'
import logo from '../../../assets/icons/logo.svg'


type Props = {
  color?: string
  uppercased?: boolean
}

export const Base = styled.div`
  height: 85px;
  background-color: ${props => props.theme.backgroundColor};
  box-shadow: ${props => props.theme.boxShadow};
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const Text = styled(Headings)<Props>`
  text-transform: ${({ uppercased }) => uppercased && 'uppercase'};
`

export const LogoDoubletapp = styled.img.attrs(() => ({
  src: logo
}))`
  padding-right: 45px;
`
