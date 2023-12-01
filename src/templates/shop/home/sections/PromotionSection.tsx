import { Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { ProductItem } from '@src/components/shop'

interface PromotionSectionProps {
  title: string
  products: any[]
}

export function PromotionSection ({ title, products }: PromotionSectionProps) {
  return <Stack gap={2}>
		<Typography variant="h3" textAlign="center">{title}</Typography>
		<Stack gap={1} direction="row" justifyContent="space-around" mx={5}>
			{products.map(product => <ProductItem key={product}/>)}
		</Stack>
		<Divider/>
	</Stack>
}
