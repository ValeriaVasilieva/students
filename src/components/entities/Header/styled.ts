import styled from 'styled-components'

import { TextBig } from '@components/styled/Texts'
import logo from '@assets/icons/logo.svg'


type Props = {
  color?: string
}

export const Base = styled.div`
  height: 85px;
  background-color: ${props => props.theme.backgroundColor};
  box-shadow: ${props => props.theme.boxShadow};
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

export const TextContent = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-items: center;
`

export const AuthorSign = styled(TextBig)`
  text-transform: 'uppercase';
  margin: 0;
`

export const AuthorSignPretext = styled(TextBig)`
  margin: 0;
`

export const Author = styled(TextBig)<Props>`
  margin: 0;
`

export const LogoDoubletapp = styled.img.attrs(() => ({
  src: logo
}))`
  padding-right: 45px;
`
