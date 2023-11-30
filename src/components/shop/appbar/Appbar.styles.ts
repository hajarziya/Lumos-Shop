import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  appbarWrapper: {
    padding: theme.spacing(1)
  },
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    padding: '20px',
    backgroundColor: '#d6d5c9',
    color: '#2b2d42'

  },
  btnText: {
    padding: '10px', // Adjust the padding as needed
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
