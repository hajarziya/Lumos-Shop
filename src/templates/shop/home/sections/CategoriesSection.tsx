import { CategoryItem } from '@src/components/shop'
import { Divider, Stack } from '@mui/material'

export function CategoriesSection () {
  return <Stack gap={1}>
		<Divider/>
		<Stack direction="row" mb={2} justifyContent="center">
			{Array.from({ length: 11 }, (_, index) => (
				<CategoryItem key={index} title={`Category ${index}`}/>))}
		</Stack>
	</Stack>
}
