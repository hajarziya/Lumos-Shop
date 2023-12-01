import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  container: {
    display: 'flex',
    margin: '30px'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '30px',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    gap: '30px'
  },
  wrapperTextFildFirst: {
    display: 'flex',
    gap: '30px',
    marginTop: '30px'
  },
  btn: {
    width: '415px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    height: '60px'
  }
}))
