import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  container: {
    display: 'flex',
    margin: '30px'
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'end',
    margin: '30px',
    gap: '30px',
    marginTop: '60px'

  },
  card: {
    display: 'flex',
    backgroundColor: 'transparent',
    border: 'none'
  },
  btn: {
    width: '415px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    height: '60px'
  },
  table: {
    margin: '60px 20px'
  }
}))
