import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  container: {
    display: 'flex',
    gap: '100px',
    backgroundColor: theme.palette.secondary.main,
    width: '70%',
    padding: '40px',
    borderRadius: '8px',
    paddingTop: '80px',
    margin: 'auto'
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'

  },
  btn: {
    width: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    height: '60px',
    marginTop: '90px',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.main

    }
  },
  fileBtn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: '8px 15px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textFieldName: {
    width: '100%'
  },
  addImageInput: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    marginTop: '10px',
    borderRadius: '5px',
    padding: '10px'
  }

}))
