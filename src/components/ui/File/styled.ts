import styled from 'styled-components'

import { TextNormal, H1 } from '../../styled/Texts'


type Props = {
  visible?: string
}

export const Base = styled.div`
  display: flex;
`

export const InputFile = styled.input.attrs({ type: 'file' })`
  display: none;
`

export const Label = styled(TextNormal)`
  text-decoration: underline;
  position: relative;
  margin-top: 20px;
  margin-left: 20px;

  &:hover {
    text-decoration-color: ${props => props.theme.colors.primary};
  }

  &::after {
    content: '500х500';
    position: absolute;
    text-decoration: none;
    top: 30px;
    left: 0;
    font-size: 12px;
  }
`

export const AvatarBox = styled(H1).attrs({
  color: 'mainTheme'
})`
  position: relative;
  height: 82px;
  width: 82px;
  background: white;
  border-radius: 50%;
  box-shadow: ${props => props.theme.boxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Avatar = styled.img<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 82px;
  height: 82px;
  outline: none;
  border-radius: 50%;
  object-fit: cover;
  ${({ visible }) => !visible && 'display: none'};
`
