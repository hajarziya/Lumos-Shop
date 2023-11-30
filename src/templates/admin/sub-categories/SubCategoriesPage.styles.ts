import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  tableWrapper: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '12px',
    padding: '20px',
    width: '80%',
    paddingLeft: '30px'
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px'
  },
  pagination: {
    color: theme.palette.primary.main
  }
}))
