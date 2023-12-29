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
  titleBox: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    marginLeft: '-100px'

  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
  btnFilter: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main
  },
  modalContainer: {
    padding: '30px',
    backgroundColor: theme.palette.secondary.main,
    width: '700px',
    display: 'flex',
    flexDirection: 'column'
  },
  topwrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start'
  },
  tableHead: {
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  }
}
))
