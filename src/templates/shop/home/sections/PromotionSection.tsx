import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { ProductItem } from '@src/components/shop'
import { useProducts } from '@src/api'

interface PromotionSectionProps {
  title: string
  categoryId: string
}

export function PromotionSection ({ title, categoryId }: PromotionSectionProps) {
  const { data } = useProducts({ page: 1, category: categoryId })
  const products = data?.data.data.products
  return <Stack gap={2}>
		<Typography variant="h3" textAlign="center">{title}</Typography>
		<Stack gap={1} direction="row" justifyContent="space-around" mx={5}>
			{products?.map(product => <ProductItem key={product._id} {...product}/>)}
		</Stack>
		<Divider/>
	</Stack>
}
