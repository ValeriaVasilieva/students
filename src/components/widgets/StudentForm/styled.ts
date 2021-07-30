import styled from 'styled-components'

import { H1, TextSmall } from '@components/styled/Texts'


export const Base = styled.div`
  margin-top: 21px;
  margin-bottom: 20px;
`

export const Heading = styled(H1)`
  @media (max-width: 600px) {
    text-align: center;
  }
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 950px) {
    justify-content: space-between;
  }
`

export const Fieldset = styled.fieldset`
  border: none;
  width: 380px;
  margin-right: 100px;
  padding: 0;

  &:nth-child(1) {
    width: 100%;
  }

  &:nth-child(3) {
    margin-right: 0;
  }

  &:last-child {
    margin-top: 25px;
  }

  @media (max-width: 950px) {
    margin-right: 24px;
  }

  @media (max-width: 860px) {
    margin: 0;
    width: 100%;
  }
`

export const ErrorMessage = styled(TextSmall).attrs({
  color: 'error'
})`
  margin: 10px 0;
`
