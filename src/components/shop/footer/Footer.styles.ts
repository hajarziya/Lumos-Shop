import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  container: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'space-around',

    textAlign: 'center',
    height: '30rem'

  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '200px'

  },
  icons: {
    width: '30px',
    height: '30px',
    color: theme.palette.primary.dark,
    cursor: 'pointer'
  },
  footerAddress: {
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },
  btnAndFooter: {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  }

}))
