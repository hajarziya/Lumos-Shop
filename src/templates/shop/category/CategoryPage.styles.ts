import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  container: {
    width: '100%',
    marginTop: '20px',
    color: theme.palette.primary.dark
  },

  subcategoriWrapper: {
    display: 'flex',
    gap: '30px',
    margin: '30px'

  },
  subcategoriCard: {
    padding: '10px',
    width: '20%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main

  },
  card: {
    backgroundColor: theme.palette.secondary.main,
    width: '20%',
    paddingTop: '30px',
    margin: '40px'
  },
  img: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    margin: 'auto',
    marginBottom: '25px'
  },
  btnSub: {
    color: theme.palette.secondary.main
  }
}))
