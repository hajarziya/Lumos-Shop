import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  wrapperBox: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '40px',
    backgroundColor: theme.palette.secondary.main,
    width: '25%',
    alignItems: 'center',
    margin: '100px auto',
    padding: '50px 30px',
    borderRadius: '15px'
  },
  appBar: {
    padding: '15px',
    backgroundColor: theme.palette.secondary.main,
    color: '#2b2d42'

  }
}))
