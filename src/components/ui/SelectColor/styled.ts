import styled, { keyframes } from 'styled-components'

import { TextSmall } from '../../styled/Texts'
import arrow from '../../../assets/icons/select_arrow.svg'


type Props = {
  isOpen?: boolean
  color?: string
  blockColor?: string
}

export const Base = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Label = styled(TextSmall)`
  margin: 20px 0 8px 0;

  &::after {
    content: '*';
    color: ${props => props.theme.error.color};
    padding-left: 5px;
  }
`

export const Select = styled(TextSmall).attrs({ color: 'placeholder' })`
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
`

export const ErrorMessage = styled(TextSmall).attrs({
  color: 'error'
})`
  margin: 2px 0;
`

export const Options = styled.div<Props>`
  position: absolute;
  cursor: pointer;
  z-index: 1;
  width: 100%;
  box-sizing: border-box;
  background: #ffffff;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: space-between;
  padding: 16px 23px;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  top: 100px;
`

export const Option = styled(TextSmall)<Props>`
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;
  background: ${({ color }) => color};
  transition: transform 0.2s;
  overflow: hidden;

  &:hover {
    transform: scale(1.2);
  }
`

//может и сделаю ее если время будет
const rideAnimation = keyframes`
  from {
    transform: translate(0, 0);
  }
  to{
    transform: translate(320, 0);
  }
`

export const OptionLgbt = styled(Option)`
  animation: ${rideAnimation} 2s;
`

export const ColorBlock = styled.div<Props>`
  height: 5px;
  width: 100%;
  background: ${({ blockColor }) => blockColor};
`

export const Input = styled.input`
  display: none;
`
