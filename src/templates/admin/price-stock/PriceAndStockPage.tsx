import useStyles from '@src/templates/admin/price-stock/PriceAndStockPage.styles'
import { AdminLayout } from '@src/components/admin'
import {
  Box, Button,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useProducts } from '@src/api'
import { theme } from '@src/theme'

export function PriceAndStockPage () {
  const { classes } = useStyles()
  const [page, setPage] = useState(1)
  const { data } = useProducts({ page })
  const products = useMemo(() => data?.data.data.products ?? [], [data])
  return (
        <AdminLayout>
          <Box className={classes.titleBox}>
          <Typography fontWeight={'bold'} variant={'h5'}
                      sx={{ marginLeft: '120px', marginBottom: '20px', color: theme.palette.primary.dark }}>Price & Quantity</Typography>
            <Button className={classes.btn}>Save</Button>
          </Box>
          <Box className={classes.container}>
            <Table className={classes.tableWrapper}>
              <TableHead>
                <TableRow>
                  <TableCell>Title</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map(product => <TableRow key={product._id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                </TableRow>)}
              </TableBody>
            </Table>
            <Stack sx={{ textAlign: 'center', alignItems: 'center' }}>
              <Pagination className={classes.pagination}
                          count={data?.data.total_pages}
                          shape="rounded"
                          page={page}
                          onChange={(_, _page) => { setPage(_page) }}/>
            </Stack>
          </Box>
        </AdminLayout>
  )
}
