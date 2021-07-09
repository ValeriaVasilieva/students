import styled from 'styled-components'

import { Texts } from '../../styled/Texts'


export const Base = styled.div``

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 40px auto 280px repeat(3, 80px) repeat(2, 30px);
  grid-gap: 3%;
  padding: 0 20px;
`

export const List = styled.div`
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px 20px;
`

export const GridCell = styled(Texts).attrs({ bigger16: true })`
  height: 40px;
  line-height: 40px;
`
