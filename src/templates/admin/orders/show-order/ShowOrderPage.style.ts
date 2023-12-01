import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  profileWrapper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  rightWrraperProfile: {
    display: 'flex',
    alignItems: 'center',
    gap: '30px',
    marginBottom: '40px'

  },
  boxprofile: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: '10px 30px',
    borderRadius: '10px',
    width: '150px'
  },
  showOrderList: {
    display: 'flex',
    gap: '10px'
  }
}))
