import styled from 'styled-components'
import { textSmall } from '@consts/mixins'


type Props = {
  width?: string
  icon?: true
}

export const Base = styled.div<Props>`
  width: ${({ width }) => width || '100%'};
`

export const Button = styled.button.attrs({
  color: 'secondary'
})<Props>`
  ${textSmall}
  color: ${props => props.theme.text.secondary};
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
