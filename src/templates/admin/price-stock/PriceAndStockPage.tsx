import useStyles from '@src/templates/admin/price-stock/PriceAndStockPage.styles'
import { AdminLayout } from '@src/components/admin'
import {
  Box,
  Button,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TextField
} from '@mui/material'
import React, { useMemo, useState } from 'react'
import { useProducts, useEditProduct } from '@src/api'
import { theme } from '@src/theme'

interface Product {
  _id: string
  name: string
  price: number
  quantity: number
}

export function PriceAndStockPage () {
  const { classes } = useStyles()
  const [page, setPage] = useState<number>(1)
  const { data, refetch } = useProducts({ page })
  const [editingRow, setEditingRow] = useState<string | null>(null)
  const products = useMemo(() => data?.data.data.products ?? [], [data])

  const { mutate: editProductMutation } = useEditProduct({ id: editingRow ?? '' }, {
    onSuccess: () => {
      setEditingRow(null)
      refetch()
    }
  })

  const handleEditClick = (productId: string) => {
    setEditingRow(productId)
  }

  const handleSaveClick = async (productId: string) => {
    try {
      const editedProductData: Partial<Product> = {
        ...editedProducts[productId]
      }
      editProductMutation(editedProductData)
    } catch (error) {
      console.error('Error editing product:', error)
    }
  }

  const handleCancelClick = () => {
    setEditingRow(null)
  }

  const [editedProducts, setEditedProducts] = useState<Record<string, Partial<Product>>>({})

  const handleFieldChange = (productId: string, field: string, value: number) => {
    // Update the edited product data in state
    setEditedProducts((prevEditedProducts) => ({
      ...prevEditedProducts,
      [productId]: {
        ...prevEditedProducts[productId],
        [field]: value
      }
    }))
  }

  return (
      <AdminLayout>
        <Box className={classes.titleBox}>
          <Typography
              fontWeight={'bold'}
              variant={'h5'}
              sx={{
                marginLeft: '120px',
                marginBottom: '20px',
                color: theme.palette.primary.dark
              }}
          >
            Price & Quantity
          </Typography>
          {editingRow !== null
            ? (
                  <Box>

                  </Box>
              )
            : null}
        </Box>

        <Box className={classes.container}>
          <Table className={classes.tableWrapper}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: 'bold' }}>Title</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Price</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
                <TableCell sx={{ fontWeight: 'bold' }}>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                  <TableRow key={product._id}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>
                      {editingRow === product._id
                        ? (
                              <TextField
                                  type="number"
                                  value={editedProducts[product._id]?.price ?? product.price}
                                  onChange={(e) => {
                                    handleFieldChange(
                                      product._id,
                                      'price',
                                      parseInt(e.target.value, 10)
                                    )
                                  }
                                  }
                              />
                          )
                        : (
                            product.price
                          )}
                    </TableCell>
                    <TableCell>
                      {editingRow === product._id
                        ? (
                              <TextField
                                  type="number"
                                  value={
                                      editedProducts[product._id]?.quantity ?? product.quantity
                                  }
                                  onChange={(e) => {
                                    handleFieldChange(
                                      product._id,
                                      'quantity',
                                      parseInt(e.target.value, 10)
                                    )
                                  }
                                  }
                              />
                          )
                        : (
                            product.quantity
                          )}
                    </TableCell>
                    <TableCell>
                      {editingRow !== product._id
                        ? (
                              <Button onClick={() => { handleEditClick(product._id) }}>
                                Edit
                              </Button>
                          )
                        : <Stack direction="row" gap={2}>
                            <Button onClick={() => { handleCancelClick() }}>
                              Cancel
                            </Button>
                            <Button
                                className={classes.btn}
                                onClick={() => handleSaveClick(editingRow)}
                            >
                              Save
                            </Button>
                          </Stack>

                      }
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
          <Stack sx={{ textAlign: 'center', alignItems: 'center' }}>
            <Pagination
                className={classes.pagination}
                count={data?.data.total_pages ?? 0}
                shape="rounded"
                page={page}
                onChange={(_, _page) => {
                  setPage(_page)
                }}
            />
          </Stack>
        </Box>
      </AdminLayout>
  )
}
