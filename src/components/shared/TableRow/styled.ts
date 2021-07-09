import styled, { css } from 'styled-components'

import { Texts } from '../../styled/Texts'
import basket from '../../../assets/icons/basket.svg'
import { colors } from '../../../consts/colors'


type Props = {
  avatar?: string
  color?: string
}

export const Base = styled.div``

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: 40px auto 280px repeat(3, 80px) repeat(2, 30px);
  align-items: center;
  grid-gap: 3%;
`

export const GridCell = styled(Texts).attrs({ medium: true })<Props>`
  height: 40px;
  line-height: 40px;
  margin: 10px 0;

  ${({ avatar }) =>
    avatar &&
    css`
      width: 40px;
      height: 40px;
      background: url(${avatar}) no-repeat center;
      background-size: auto;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.6);
      box-sizing: border-box;
    `}
`

export const Color = styled.div<Props>`
  width: 30px;
  height: 30px;
  background: ${({ color }) => colors.find(currentColor => currentColor.color === color)?.value};
  border-radius: 50%;
`

export const Button = styled.button`
  background: url(${basket}) no-repeat center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: none;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`
