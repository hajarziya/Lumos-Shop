import { DepartmentItem } from '@src/components/shop'
import { Stack } from '@mui/material'
import { useMemo } from 'react'
import { useCategories } from '@src/api'

export function DepartmentsSection () {
  const { data } = useCategories({ page: 1 })
  const categories = useMemo(() => data?.data.data.categories ?? [], [data])

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1} mt={2}>
        {categories.map((category) => (
            <DepartmentItem key={category._id} categoryId={category._id} title={category.name} icon={category.icon}/>
        ))}
	</Stack>
  )
}
