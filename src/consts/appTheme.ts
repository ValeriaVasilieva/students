import { DefaultTheme } from "styled-components"


export const defaultTheme: DefaultTheme = {
  colors: {
    primary: '#49C2E8',
    secondary: 'red'
  },
  text: {
    primary: '#000000',
    secondary: '#FFFFFF',
    mainTheme: '#49C2E8',
    placeholder: '#c4c4c4;'
  },
  error: {
    color: '#E25B5B'
  },
  boxShadow: '0px 7px 64px rgba(0, 0, 0, 0.07);',
  borderRadius: '6px',
  backgroundColor: '#FFFFFF',
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)'
  }
}