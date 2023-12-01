import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px',
    gap: '40px'
  },
  imgWrapper: {
    width: '500rem',
    height: '500px'
  },
  btnColor: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px'
  },
  wrapperBtn: {
    display: 'flex',
    margin: '30px 0'
  },
  btn: {
    width: '415px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    height: '60px',
    marginTop: '30px'
  }
}))
