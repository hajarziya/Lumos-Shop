import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  header: {
    backgroundColor: 'transparent',
    height: '100px'
  },
  logo: {
    paddingTop: '10px',
    paddingLeft: '40px',
    color: theme.palette.primary.dark,
    fontWeight: 'bold'
  },
  countainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '50px',
    color: theme.palette.primary.dark
  },
  wrapperForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '50%',
    justifyContent: 'center'

  },
  paper: {
    padding: '30px',
    backgroundColor: 'transparent',
    width: '30%'
  },
  itemPriceWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '150px',
    margin: '10px 0'
  },
  saveBtn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'end',
    padding: '10px 30px',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.main
    }
  },
  saveBtnWrapper: {
    display: 'flex',
    justifyContent: 'end',
    marginTop: '20px'

  },
  total: {
    color: theme.palette.primary.main
  }

}))
