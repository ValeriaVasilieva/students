import styled from 'styled-components'

import { H1, TextSmall } from '../../styled/Texts'
import loupe from '../../../assets/icons/loupe.svg'


export const Base = styled.div``

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0 24px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    margin: 10px 0 24px 0;
  }
`

export const Header = styled(H1)``

export const ButtonBox = styled.div`
  width: 340px;

  @media (max-width: 600px) {
    width: 100%;
  }
`

export const SearchBar = styled(TextSmall)`
  width: 100%;
  height: 48px;
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  border: none;
  outline: none;
  background: url(${loupe}) no-repeat left;
  background-position: 20px;
  padding: 0 51px;
  cursor: pointer;
  box-sizing: border-box;

  &:focus {
    background-position: 18px;
    padding: 0 49px;
    border: 2px solid ${props => props.theme.colors.primary};
  }

  &::placeholder {
    color: ${props => props.theme.text.placeholder};
  }
`
