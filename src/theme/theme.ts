import { createTheme as createMuiTheme, type Theme } from '@mui/material'

export const createTheme = () => {
  const initialTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#780000',
        light: '#c1121f',
        dark: '#2b2d42'
      },
      secondary: {
        main: '#fdf0d5',
        dark: '#003049',
        light: '#669bbc'
      }
    }
  })
  return createMuiTheme(initialTheme, {
    components: {
      MuiButton: (theme: Theme) => ({
        variants: [{
          props: { variant: 'text' },
          styles: {
            padding: '10px',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            marginRight: '10px',
            color: '#0a100d',
            '&:hover': {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.secondary.main

            }
          }
        }]
      })
    }
  })
}

export const theme = createTheme()
