import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.main
  },
  img: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    marginLeft: '14px',
    marginBottom: '25px'
  }
}))
