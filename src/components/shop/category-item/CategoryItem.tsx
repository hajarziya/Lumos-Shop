import { Button } from '@mui/material'
import useStyles from './CategoryItem.styles'

interface CategoryItemProps {
  title: string
}

export function CategoryItem ({ title }: CategoryItemProps) {
  const { classes } = useStyles()

  return (
		<Button variant="text" className={classes.btnText}>
			{title}
		</Button>
  )
}
