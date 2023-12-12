import { AdminLayout, ProductItem } from '@src/components/admin'
import useStyles from './ProductsPage.styles'
import { Box, Button, Pagination, Stack, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Link from 'next/link'
import { useCategories, useProducts, useDeleteProduct } from '@src/api'
import React, { useMemo, useState } from 'react'

export function ProductsPage () {
  const { classes } = useStyles()
  const [page, setPage] = useState(1)
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | undefined>(undefined)
  const { data, refetch } = useProducts({ page, category: selectedCategoryId })
  const products = useMemo(() => data?.data.data.products ?? [], [data])

  const { data: categoriesData } = useCategories({ page: 1 })
  const categories = useMemo(() => categoriesData?.data.data.categories ?? [], [categoriesData])

  const deleteProductMutation = useDeleteProduct()
  const handleDelete = async (productId: string) => {
    try {
      await deleteProductMutation(productId)
      await refetch()
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  return (
		<AdminLayout>
			<Box className={classes.header}>
				<Typography variant={'h5'} fontWeight={'bold'}>Products</Typography>
				<TextField size="small" placeholder="Search" sx={{ width: '30rem', marginRight: '7rem' }}></TextField>
				<Stack className={classes.addWrapper}>
					<Link href='/admin/products/create'>
					<Button className={classes.addBtn}>
						<AddIcon/>
						<Typography sx={{ marginLeft: '5px', fontSize: '10px' }}>Add Product</Typography>
					</Button>
					</Link>
					<Typography fontWeight={'bold'}>Use tags to filter your search</Typography>
				</Stack>
			</Box>
			<Box className={classes.countentWrapper}>
				<Box className={classes.productWrapper}>
					{products.map(product => <ProductItem {...product} key={product._id} onDelete={handleDelete} product={product} />)}
				</Box>
				<Box className={classes.categoriBtnsWrapper}>
					<Button variant={!selectedCategoryId ? 'contained' : 'outlined'} onClick={() => { setSelectedCategoryId(undefined) }}>All</Button>
					{categories.map(category =>
						<Button key={category._id}
								variant={selectedCategoryId === category._id ? 'contained' : 'outlined'}
								onClick={() => { setSelectedCategoryId(category._id) }}>
							{category.name}
						</Button>)}
				</Box>
			</Box>
			<Stack sx={{ textAlign: 'center', alignItems: 'center' }}>
				<Pagination
							count={data?.data.total_pages}
							shape="rounded"
							page={page}
							onChange={(_, _page) => { setPage(_page) }}/>
			</Stack>
		</AdminLayout>
  )
}
