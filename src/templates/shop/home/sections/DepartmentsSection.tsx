import { DepartmentItem } from '@src/components/shop'
import { Stack } from '@mui/material'

export function DepartmentsSection () {
  return <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1} mt={2}>
		{Array.from({ length: 14 }, (_, index) => <DepartmentItem key={index} title={`Department ${index}`}/>)}
	</Stack>
}
