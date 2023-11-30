import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  container: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'space-around',

    textAlign: 'center',
    height: '30rem'

  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '200px'

  }

}))
