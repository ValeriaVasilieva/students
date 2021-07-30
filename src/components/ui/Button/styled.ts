import styled from 'styled-components'

import { TextSmall } from '@components/styled/Texts'


type Props = {
  width?: string
  icon?: true
}

export const Base = styled.div<Props>`
  width: ${({ width }) => width || '100%'};
`

export const Button = styled(TextSmall).attrs({
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
