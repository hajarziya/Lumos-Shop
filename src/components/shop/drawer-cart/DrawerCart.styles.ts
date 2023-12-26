import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  titleWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '200px',
    marginTop: '20px'
  },
  title: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold'
  },
  productCart: {
    border: '0.5px solid black',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px',
    marginTop: '15px'

  },
  rightPartCart: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '20px'
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'center',
    margin: '30px auto',
    fontWeight: 'bold',
    width: '80%',
    padding: '10px'

  }
}))
