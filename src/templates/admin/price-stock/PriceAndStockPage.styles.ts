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
  },
  popver: {
    alignItems: 'center',
    display: 'flex',
    textAlign: 'center'

  },
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    marginRight: '120px'
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  }

}))
