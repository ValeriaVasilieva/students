import styled, { css } from 'styled-components'

import { Texts } from '../../styled/Texts'
import basket from '../../../assets/icons/basket.svg'
import { colors } from '../../../consts/colors'


type Props = {
  avatarSrc?: string
  color?: string
  blockColor?: string
}

export const Base = styled.div``

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: 40px 280px auto repeat(3, 80px) repeat(2, 30px);
  align-items: center;
  grid-gap: 3%;
`

export const GridCell = styled(Texts).attrs({ medium: true })`
  height: 40px;
  line-height: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`

export const Avatar = styled.div<Props>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  flex-shrink: 1;

  ${({ avatarSrc }) =>
    avatarSrc &&
    css`
      background: url(${avatarSrc}) no-repeat;
      background-size: calc(100% + 4px) calc(100% + 4px);
      background-position: -2px;
    `}
`

export const AvatarWithoutPic = styled.div`
  width: 100%;
  text-align: center;
  font-size: 20px;
`

export const Color = styled.div<Props>`
  width: 30px;
  height: 30px;
  background: ${({ color }) => colors.find(currentColor => currentColor.color === color)?.value};
  border-radius: 50%;
  overflow: hidden;
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

export const ColorBlock = styled.div<Props>`
  height: 5px;
  width: 100%;
  background: ${({ blockColor }) => blockColor};
`
