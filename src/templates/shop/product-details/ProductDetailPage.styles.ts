import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  container: {
    display: 'flex',
    margin: '30px 50px',
    gap: '50px',
    color: theme.palette.primary.dark
  },
  imgWrapper: {
    width: '50%'
  },
  wrapperBtn: {
    display: 'flex',
    margin: '30px 0'
  },
  btn: {
    width: '415px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    height: '60px',
    marginTop: '30px',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.secondary.main
    }
  },
  textWrapper: {
    width: '50%',
    marginTop: '70px'
  },
  likeAndQuantity: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  priceWrapper: {
    color: theme.palette.primary.main,
    marginTop: '30px',
    display: 'flex',
    justifyContent: 'space-between'

  }
}))
