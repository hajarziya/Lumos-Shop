import React from 'react'
import useStyles from './ProductItem.styles'
import { Button, Card, CardMedia } from '@mui/material'

export function ProductItem () {
  const { classes } = useStyles()

  return <Card className={classes.card}>
		<CardMedia
			component="img"
			alt="tree"
			height="330"
			image="images/tree.webp"
		/>
		<Button className={classes.button} size="small">Ornaments From $10</Button>
	</Card>
}
