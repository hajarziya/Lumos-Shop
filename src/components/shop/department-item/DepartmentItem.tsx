import React from 'react'
import useStyles from './Department.styles'
import { Button, Card, CardMedia } from '@mui/material'

interface DepartmentItemProps {
  title: string
  image?: string
}

export function DepartmentItem ({ title }: DepartmentItemProps) {
  const { classes } = useStyles()

  return <Card className={classes.CartItem}>
		<CardMedia className={classes.deprtmentItem}></CardMedia>
		<Button style={{ fontWeight: 'bold' }}>{title}</Button>
	</Card>
}
