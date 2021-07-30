import styled from 'styled-components'

import { TextNormal } from '@components/styled/Texts'


export const Base = styled.div`
  margin-bottom: 20px;
`

export const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 40px 280px auto repeat(3, 80px) repeat(2, 30px);
  grid-gap: 3%;
  padding: 0 20px;

  @media ${props => props.theme.media.studentList} {
    display: none;
  }
`

export const List = styled.div`
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: ${props => props.theme.borderRadius};
  padding: 15px 20px;
  margin-bottom: 20px;

  @media (max-width: 850px) {
    box-shadow: none;
    display: flex;
    flex-wrap: wrap;
    flex-shrink: 1;
    justify-content: space-between;
    padding: 0px;
  }
`

export const GridCell = styled(TextNormal)`
  height: 40px;
  line-height: 20px;
`
