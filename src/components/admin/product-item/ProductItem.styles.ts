import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
    width: '25%'
  },
  img: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    margin: 'auto',
    marginBottom: '25px'
  }
}))
