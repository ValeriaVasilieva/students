import styled, { css } from 'styled-components'


type TextsProps = {
  color?: string
  bigger16?: true
  medium?: true
  main?: true
}

export const Headings = styled.div<TextsProps>`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;

  ${({ main }) =>
    main &&
    css`
      font-size: 35px;
      font-weight: 700;
    `}

  color: ${({ color }) => {
    switch (color) {
      case 'mainTheme':
        return props => props.theme.text.mainTheme
      case 'secondary':
        return props => props.theme.text.secondary
      default:
        return props => props.theme.text.primary
    }
  }};
`
export const Texts = styled.div<TextsProps>`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;

  ${({medium}) => medium && css`font-weight: 500;`}

  ${({ bigger16 }) =>
    bigger16 &&
    css`
      font-size: 16px;
    `}

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
