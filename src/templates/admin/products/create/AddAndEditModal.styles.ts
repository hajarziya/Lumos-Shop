import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  container: {
    display: 'flex',
    gap: '100px',
    backgroundColor: theme.palette.secondary.main,
    width: '70%',
    padding: '40px',
    borderRadius: '8px'
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    height: '70%',
    marginTop: '100px'

  },
  btn: {
    width: '415px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    height: '60px',
    marginTop: '110px'
  },
  addBtn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: '8px 15px'

  },
  textFieldName: {
    width: '420px'
  }

}))
