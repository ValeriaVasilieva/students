import styled from 'styled-components'

import { TextSmall } from '../../styled/Texts'
import arrow from '../../../assets/icons/select_arrow.svg'
import check from '../../../assets/icons/check.svg'


type Props = {
  isOpen?: boolean
  hasValue?: boolean
}

export const Base = styled.div`
  position: relative;
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

export const Select = styled(TextSmall).attrs({ color: 'placeholder' })<Props>`
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  background-color: ${props => props.theme.backgroundColor};
  height: 48px;
  padding: 0 20px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: url(${arrow}) no-repeat 95% center;
  cursor: pointer;

  &:focus {
    padding: 0 18px;
    box-sizing: border-box;
    border: 2px solid ${props => props.theme.colors.primary};
  }

  ${({ hasValue }) => hasValue && 'color: black'};
`

export const ErrorMessage = styled(TextSmall).attrs({
  color: 'error'
})`
  margin: 10px 0;
`

export const Options = styled.div<Props>`
  position: absolute;
  cursor: pointer;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 16px 23px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  top: 100px;
`

export const Option = styled(TextSmall)`
  line-height: 35px;
  padding: 0 12px;
  border-radius: inherit;
  cursor: pointer;
  position: relative;
  outline: none;

  &:focus {
    background: rgba(73, 194, 232, 0.11);
  }

  &:focus::after {
    content: url(${check});
    position: absolute;
    right: 12px;
  }
`

export const Input = styled.input`
  display: none;
`
