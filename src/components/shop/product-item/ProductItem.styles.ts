import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  card: {
    width: '300px',
    height: '400px',
    backgroundColor: theme.palette.secondary.main,
    cursor: 'pointer'
  },
  button: {
    marginTop: '30px',
    fontWeight: 'bold'
  }
}))
