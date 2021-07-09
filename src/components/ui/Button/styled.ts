import styled from 'styled-components'

import { Texts } from '../../styled/Texts'


type Props = {
  width?: string;
  icon?: true
}

export const Base = styled.div<Props>`
  width: ${({width}) => width};
`

export const Button = styled(Texts).attrs({
  color: 'secondary'
})<Props>`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  .icon {
    padding-right: 15px;
  }
`
