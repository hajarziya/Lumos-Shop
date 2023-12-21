import { CategoryItem } from '@src/components/shop'
import { Divider, Stack } from '@mui/material'
import { useCategories } from '@src/api'
import { useMemo } from 'react'

export function CategoriesSection () {
  const { data } = useCategories({ page: 1 })
  const categories = useMemo(() => data?.data.data.categories ?? [], [data])

  return <Stack gap={1}>
		<Divider/>
		<Stack direction="row" mb={2} justifyContent="center">
			{categories.map(category =>
				<CategoryItem key={category._id} title={category.name} categoryId={category._id}/>
			)}
		</Stack>
	</Stack>
}
