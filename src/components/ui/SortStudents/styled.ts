import styled, { css } from 'styled-components'

import { TextSmall } from '../../styled/Texts'
import sortArrow from '../../../assets/icons/sort_arrow.svg'


type Props = {
  isOpen?: boolean
  colorValue?: string
}

export const Base = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    display: none;
  }
`

export const Select = styled(TextSmall).attrs({ color: 'placeholder' })<Props>`
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  background-color: ${props => props.theme.backgroundColor};
  height: 48px;
  outline: none;
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 180px;
  box-sizing: border-box;
  background: url(${sortArrow}) no-repeat center;
  background-position: 140px;
  cursor: pointer;

  &:focus {
    padding: 0 18px;
    background-position: 138px;
    border: 2px solid ${props => props.theme.colors.primary};
  }

  ${({ colorValue }) =>
    colorValue &&
    css`
      color: ${props => props.theme.text.primary};
    `}
`

export const Options = styled.div<Props>`
  position: absolute;
  width: 100%;
  cursor: pointer;
  z-index: 1;
  box-sizing: border-box;
  background: #ffffff;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding: 10px 20px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  top: 55px;
`

export const Option = styled(TextSmall)`
  line-height: 35px;
  padding: 0 5px;
  border-radius: inherit;
  cursor: pointer;

  &:hover {
    background: rgba(73, 194, 232, 0.11);
  }
`
