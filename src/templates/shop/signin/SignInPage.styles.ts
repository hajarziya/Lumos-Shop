import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  header: {
    backgroundColor: 'transparent',
    height: '100px'
  },
  logo: {
    paddingTop: '10px',
    paddingLeft: '40px',
    color: theme.palette.primary.dark,
    fontWeight: 'bold'
  },
  container: {
    display: 'flex',
    margin: '30px'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    margin: '140px',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    gap: '30px'

  },
  textField: {
    width: '30%'
  },
  btn: {
    width: '415px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    height: '60px'
  },
  wrapperSignupBtn: {
    marginTop: '150px'
  },
  typograghy: {
    color: theme.palette.primary.dark,
    marginBottom: '30px',
    fontWeight: 'bold'
  }

}))
