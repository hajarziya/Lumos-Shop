import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  drawerWrapper: {
    width: '220px',
    backgroundColor: theme.palette.secondary.main,
    height: '100%',
    position: 'fixed'
  },
  list: {
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  }
}))
