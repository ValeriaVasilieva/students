import styled from 'styled-components'

import { TextSmall } from '../../styled/Texts'


export const Base = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Label = styled(TextSmall)`
  margin: 10px 0 8px 0;

  &::after {
    content: '*';
    color: ${props => props.theme.error.color};
    padding-left: 5px;
  }
`

export const Input = styled(TextSmall)`
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  background-color: ${props => props.theme.backgroundColor};
  height: 48px;
  padding: 0 20px;
  outline: none;

  &::placeholder {
    color: ${props => props.theme.text.placeholder};
  }

  &:focus {
    padding: 0 18px;
    box-sizing: border-box;
    border: 2px solid ${props => props.theme.colors.primary};
  }
`

export const ErrorMessage = styled(TextSmall).attrs({
  color: 'error'
})`
  margin: 10px 0;
`
