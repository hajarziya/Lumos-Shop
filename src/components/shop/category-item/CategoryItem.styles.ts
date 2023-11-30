import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  btnText: {
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
}))
