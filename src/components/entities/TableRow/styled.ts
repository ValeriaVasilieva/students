import styled, { css } from 'styled-components'

import { TextBold } from '@components/styled/Texts'
import blackStar from '@assets/icons/black_star.svg'
import basket from '@assets/icons/basket.svg'


type Props = {
  avatarSrc?: string
  color?: string
  blockColor?: string
}

export const Base = styled.div`
  @media (max-width: 850px) {
    width: 49%;
    padding: 2% 0;
    height: 180px;
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: ${props => props.theme.borderRadius};
    margin-bottom: 10px;
  }
  @media (max-width: 660px) {
    width: 100%;
  }
`

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: 40px 280px auto repeat(3, 80px) repeat(2, 30px);
  grid-row: 40px;
  align-items: center;
  grid-gap: 3%;

  @media ${props => props.theme.media.studentList} {
    grid-template-columns: 40px auto 140px repeat(3, 80px) repeat(2, 30px);
  }

  @media (max-width: 850px) {
    grid-template-rows: 35px 20px 15px repeat(3, 30px);
    grid-template-columns: 65px 20px auto 45px;
    height: 100%;
    grid-gap: 5px 20px;
    margin-left: 15px;

    /* avatar */
    & div:nth-child(1) {
      grid-area: 1 / 1 / span 2 / span 1;
      line-height: 50px;
      font-size: 22px;
    }
    /* name */
    & div:nth-child(2) {
      grid-area: 1 / 2 / span 1 / span 2;
      font-weight: 700;
    }
    /* prof */
    & div:nth-child(3) {
      grid-area: 5 / 2 / span 1 / span 2;
    }
    /* group */
    & div:nth-child(4) {
      grid-area: 6 / 2 / span 1 / span 2;
    }
    /* age */
    & div:nth-child(5) {
      grid-area: 4 / 2 / span 1 / span 2;
    }
    /* score */
    & div:nth-child(6) {
      grid-area: 2 / 3 / span 1 / span 1;

      &:before {
        content: url(${blackStar});
        padding-right: 10px;
      }
    }
    /* color */
    & div:nth-child(7) {
      margin-top: 5px;
      width: 12px;
      height: 12px;
      grid-area: 2 / 2 / span 1 / span 1;
      margin: 0;
    }
    /* line */
    & div:nth-child(8) {
      display: block;
      grid-column: 1 / span 4;
      background: rgba(0, 0, 0, 0.07);
      width: 100%;
      height: 1px;
    }
    /* button */
    & button {
      grid-area: 1 / 4 / span 2 / span 1;
    }
  }
`

export const GridCell = styled(TextBold)`
  height: 100%;
  line-height: 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
`

export const VerticalLine = styled.div`
  display: none;
`

export const Avatar = styled.div<Props>`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;

  flex-shrink: 1;

  ${({ avatarSrc }) =>
    avatarSrc &&
    css`
      background: url(${avatarSrc}) no-repeat center;
      background-size: cover;
    `}

  @media (max-width: 850px) {
    width: 55px;
    height: 55px;
  }
`

export const AvatarBorder = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;

  @media (max-width: 850px) {
    width: 55px;
    height: 55px;
  }
`

export const AvatarWithoutPic = styled.div`
  width: 40px;
  height: 40px;
  line-height: 38px;
  box-sizing: border-box;
  text-align: center;
  font-size: 16px;
  color: ${props => props.theme.text.mainTheme};
  border-radius: 50%;
  border: 2px solid ${props => props.theme.text.placeholder};
  flex-shrink: 1;

  @media (max-width: 850px) {
    width: 55px;
    height: 55px;
  }
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
