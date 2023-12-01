import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  appBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: theme.palette.secondary.main,
    color: '#2b2d42',
    boxShadow: 'none'

  },
  leftBarWrapper: {
    display: 'flex',
    gap: '30px',
    textAlign: 'center',
    alignItems: 'center',
    width: '80%',
    paddingLeft: '100px'
  },
  rightBarWrapper: {
    display: 'flex',
    gap: '10px',
    textAlign: 'center',
    alignItems: 'center',
    marginRight: '30px'

  },
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
