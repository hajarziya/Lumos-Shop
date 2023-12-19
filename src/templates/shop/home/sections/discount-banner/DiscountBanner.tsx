import useStyles from './DiscountBanner.styles'
import { Box, CardMedia } from '@mui/material'
import React from 'react'

export function DiscountBanner () {
  const { classes } = useStyles()
  return (
		<Box className={classes.banner}>
            <CardMedia className={classes.banner}
                image='/images/banner.webp'
            ></CardMedia>
        </Box>
  )
}
