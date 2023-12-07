import { AdminLayout, ProductItem } from '@src/components/admin'
import useStyles from './ProductsPage.styles'
import { Box, Button, Pagination, Stack, TextField, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import Link from 'next/link'
import { useProducts } from '@src/api'
import React, { useMemo, useState } from 'react'

export function ProductsPage () {
  const { classes } = useStyles()
  const [page, setPage] = useState(1)
  const { data } = useProducts({ page })
  const products = useMemo(() => data?.data.data.products ?? [], [data])
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
					{products.map(product => <ProductItem {...product} key={product._id} />)}
				</Box>
				<Box className={classes.categoriBtnsWrapper}>
					<Button variant="contained">All</Button>
					<Button variant="outlined">Starters</Button>
					<Button variant="outlined">Pastas</Button>
					<Button variant="outlined">Pizza</Button>
					<Button variant="outlined">Rustic</Button>
					<Button variant="outlined">Pastas</Button>
					<Button variant="outlined">Pizza</Button>
					<Button variant="outlined">Rustic</Button>
					<Button variant="outlined">Pastas</Button>
					<Button variant="outlined">Pizza</Button>
					<Button variant="outlined">Rustic</Button>
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
