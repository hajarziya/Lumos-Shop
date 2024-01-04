// OrdersPage.tsx
import useStyles from './OrderPage.styles'
import React, { useMemo, useState } from 'react'
import { AdminLayout } from '@src/components/admin'
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Chip,
  Stack,
  Pagination,
  ToggleButtonGroup,
  ToggleButton
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { theme } from '@src/theme'
import { useOrders } from '@src/api'
import moment from 'moment'
import { ModalView } from '@src/templates/admin/orders/ModalView'
import { IOrder } from '@src/api/interface'

export function OrdersPage () {
  const { classes } = useStyles()
  const [page, setPage] = useState<number>(1)
  const [deliveryStatus, setDeliveryStatus] = useState<boolean>(true)
  const [selectedOrder, setSelectedOrder] = React.useState<IOrder | null>(null)

  const { data, refetch } = useOrders({ page, deliveryStatus })
  const orders = useMemo(() => data?.data.data.orders ?? [], [data])

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setPage(1)
    setDeliveryStatus(value === 'delivered')
  }

  return (
        <AdminLayout>
            <Box className={classes.titleBox}>
                <Typography fontWeight={'bold'} variant={'h5'}
                            sx={{ marginLeft: '120px', marginBottom: '20px', color: theme.palette.primary.dark }}>
                    Orders
                </Typography>
                <Box mb={1} >
                    <ToggleButtonGroup color="primary" exclusive value={deliveryStatus ? 'delivered' : 'inProgress'}
                                       onChange={handleChange}>
                        <ToggleButton value="delivered">Delivered</ToggleButton>
                        <ToggleButton value="inProgress">In Progress</ToggleButton>
                    </ToggleButtonGroup>
                </Box>
            </Box>
            <Stack direction="row" gap={2}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }}>User</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Amount</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Date</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((order) => (
                            <TableRow key={order._id}>
                                <TableCell>{order.user.firstname} {order.user.lastname}</TableCell>
                                <TableCell>${Number(order.totalPrice).toFixed(2)}</TableCell>
                                <TableCell>{moment(order.deliveryDate).format('DD/MM/YYYY HH:mm')}</TableCell>
                                <TableCell>
                                    <Chip label={order.deliveryStatus ? 'Delivered' : 'In Progress'}
                                          color={order.deliveryStatus ? 'success' : 'default'}/>
                                </TableCell>
                                <TableCell>
                                    <Button onClick={() => {
                                      setSelectedOrder(order)
                                    }} startIcon={<VisibilityIcon/>}>
                                        View
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Box className={classes.form}>
                    <Typography sx={{ fontWeight: 'bold' }}>Filter</Typography>
                    <TextField label="Search Name" sx={{ width: '300px' }}/>
                    <TextField label="Status" sx={{ width: '300px' }}/>
                    <TextField label="User" sx={{ width: '300px' }}/>
                    <TextField label="Amount" sx={{ width: '300px' }}/>
                    <Button className={classes.btnFilter}>Filter</Button>
                </Box>
            </Stack>
            <Stack sx={{ textAlign: 'center', alignItems: 'center', mt: 2 }}>
                <Pagination
                    count={data?.data.total_pages}
                    shape="rounded"
                    page={page}
                    onChange={(_, _page) => {
                      setPage(_page)
                    }}
                />
            </Stack>
            {selectedOrder && <ModalView
                open={!!selectedOrder}
                order={selectedOrder}
                handleClose={() => {
                  setSelectedOrder(null)
                  refetch()
                }}/>}
        </AdminLayout>
  )
}
