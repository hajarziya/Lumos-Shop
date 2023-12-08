import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  container: {
    display: 'flex',
    gap: '30px'
  },
  form: {
    backgroundColor: theme.palette.secondary.main,
    padding: '20px',
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    borderRadius: '12px'
  },
  table: {
    backgroundColor: theme.palette.secondary.main,
    width: '70%',
    borderRadius: '12px',
    padding: '10px'
  },
  btnFilter: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  }
}))
