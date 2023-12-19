import { CategoryItem } from '@src/components/shop'
import { Divider, Stack } from '@mui/material'
import { useCategories } from '@src/api'
import { useMemo, useState } from 'react'

export function CategoriesSection () {
  const [page, setPage] = useState(1)
  const { data } = useCategories({ page })
  const categories = useMemo(() => data?.data.data.categories ?? [], [data])

  return <Stack gap={1}>
		<Divider/>
		<Stack direction="row" mb={2} justifyContent="center">
			{categories.map(category =>

				<CategoryItem key={category._id} title={category.name}/>
			)}
		</Stack>
	</Stack>
}
