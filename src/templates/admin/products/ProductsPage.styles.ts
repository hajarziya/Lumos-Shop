import { makeStyles } from '@src/theme'

export default makeStyles()((theme) => ({
  header: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    margin: '0 10px',
    gap: '10px'
  },
  productWrapper: {
    display: 'flex',
    gap: '30px',
    width: '90%'

  },
  addBtn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    padding: '8px 15px'

  },
  addWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: '30px',
    gap: '25px'
  },
  countentWrapper: {
    display: 'flex',
    margin: '70px 0',
    gap: '30px'

  },
  categoriBtnsWrapper: {
    width: '20%',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    height: '200px'
  }
}))
