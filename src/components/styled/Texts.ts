import styled from 'styled-components'


export const TextColors = styled.div`
  color: ${({ color }) => {
    switch (color) {
      case 'mainTheme':
        return props => props.theme.text.mainTheme
      case 'placeholder':
        return props => props.theme.text.placeholder
      case 'secondary':
        return props => props.theme.text.secondary
      case 'error':
        return props => props.theme.error.color
      default:
        return props => props.theme.text.primary
    }
  }};
`

export const H1 = styled(TextColors)`
  font-size: 35px;
  font-weight: 700;
`

export const TextSmall = styled(TextColors)`
  font-size: 15px;
  font-weight: 400;
`

export const TextNormal = styled(TextColors)`
  font-size: 16px;
  font-weight: 400;
`

export const TextBig = styled(TextColors)`
  font-size: 20px;
  font-weight: 500;
`

export const TextBold = styled(TextColors)`
  font-size: 15px;
  font-weight: 500;
`
