import { Button, Link } from '@mui/material'
import useStyles from './CategoryItem.styles'

interface CategoryItemProps {
  title: string
  categoryId: string
}
export function CategoryItem ({ title, categoryId }: CategoryItemProps) {
  const { classes } = useStyles()

  return (
      <Link href={`/category/${categoryId}`} underline="none">
		<Button variant="text" className={classes.btnText} >
			{title}
		</Button>
      </Link>
  )
}
