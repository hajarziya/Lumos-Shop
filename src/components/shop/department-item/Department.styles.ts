import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  CartItem: {
    margin: '20px 15px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '130px',
    backgroundColor: theme.palette.secondary.main,
    gap: '20px',
    padding: '10px'

  },
  deprtmentItem: {
    backgroundColor: theme.palette.primary.main,
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    margin: 'auto'

  }
}))
