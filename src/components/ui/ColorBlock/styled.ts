import styled from 'styled-components'


type Props = {
  blockColor: string
}

export const ColorBox = styled.div`
  background: ${({ color }) => color};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
`

export const ColorBlock = styled.div<Props>`
  height: 5px;
  width: 100%;
  height: calc(100% / 6);
  width: 100%;
  background: ${({ blockColor }) => blockColor};
`
