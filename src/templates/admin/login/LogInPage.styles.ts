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
    backgroundColor: theme.palette.secondary.main,
    height: '100px'
  },
  logo: {
    paddingTop: '10px',
    paddingLeft: '40px',
    color: theme.palette.primary.dark,
    fontWeight: 'bold'
  }

}))
