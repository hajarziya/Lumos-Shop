import React from 'react'
import useStyles from './Department.styles'
import { Button, Card, CardMedia, Link } from '@mui/material'

interface DepartmentItemProps {
  title: string
  icon?: string
  categoryId: string
}

export function DepartmentItem ({ title, icon, categoryId }: DepartmentItemProps) {
  const { classes } = useStyles()

  return <Card className={classes.CartItem}>
      <Link href={`/category/${categoryId}`}>
          <a>
              <CardMedia className={classes.deprtmentItem} image={`${process.env.NEXT_PUBLIC_BASE_ICON_URL}${icon}`} />
              <Button style={{ fontWeight: 'bold' }}>{title}</Button>
          </a>
      </Link>
	</Card>
}
