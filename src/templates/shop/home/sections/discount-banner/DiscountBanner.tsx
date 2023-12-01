import useStyles from './DiscountBanner.styles'
import { Box } from '@mui/material'

export function DiscountBanner () {
  const { classes } = useStyles()
  return (
		<Box className={classes.banner}></Box>
  )
}
