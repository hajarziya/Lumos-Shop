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
  Popover,
  Chip,
  FormControlLabel,
  Checkbox,
  Stack, Pagination, ToggleButtonGroup, ToggleButton
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditNoteIcon from '@mui/icons-material/EditNote'
import VisibilityIcon from '@mui/icons-material/Visibility'
import { theme } from '@src/theme'
import { useOrders } from '@src/api'
import moment from 'moment'

export function OrdersPage () {
  const { classes } = useStyles()
  const [page, setPage] = useState(1)
  const [deliveryStatus, setDeliveryStatus] = useState(true)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = <MoreVertIcon/> ? 'Edit' : undefined

  const { data } = useOrders({ page, deliveryStatus })
  const orders = useMemo(() => data?.data.data.orders ?? [], [data])

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setDeliveryStatus(value === 'delivered')
  }

  return (
        <AdminLayout>
            <Box className={classes.titleBox}>
                <Typography fontWeight={'bold'} variant={'h5'}
                            sx={{ marginLeft: '120px', marginBottom: '20px', color: theme.palette.primary.dark }}>Orders</Typography>
                <Box mb={1}>
                    <ToggleButtonGroup
                        color="primary"
                        exclusive
                        value={deliveryStatus ? 'delivered' : 'inProgress'}
                        onChange={handleChange}
                    >
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
                        {orders.map(order => <TableRow key={order._id}>
                            <TableCell>{order.user.firstname} {order.user.lastname}</TableCell>
                            <TableCell>${Number(order.totalPrice).toFixed(2)}</TableCell>
                            <TableCell>{moment(order.deliveryDate).format('DD/MM/YYYY HH:mm')}</TableCell>
                            <TableCell><Chip label={order.deliveryStatus ? 'Delivered' : 'In Progress'} color={order.deliveryStatus ? 'success' : 'default'} /></TableCell>
                            <TableCell>
                                <Button aria-describedby={id} variant="contained" onClick={handleClick}><MoreVertIcon/></Button>
                                <Popover
                                    className={classes.popver}
                                    id={id}
                                    open={open}
                                    anchorEl={anchorEl}
                                    onClose={handleClose}
                                    anchorOrigin={{
                                      vertical: 'bottom',
                                      horizontal: 'left'
                                    }}
                                >
                                    <Stack gap={1} p={1}>
                                        <Button startIcon={<VisibilityIcon/>}>View</Button>
                                        <Button startIcon={<EditNoteIcon/>}>Edit</Button>
                                    </Stack>

                                </Popover>
                            </TableCell>

                        </TableRow>)}
                    </TableBody>
                </Table>
                <Box className={classes.form}>
                    <Typography sx={{ fontWeight: 'bold' }}>Filter</Typography>
                    <TextField
                        label="Search Name"
                        sx={{ width: '300px' }}
                    />
                    <TextField
                        label="Status"
                        sx={{ width: '300px' }}
                    />

                    <TextField
                        label="User"
                        sx={{ width: '300px' }}
                    />

                    <TextField
                        label="Amount"
                        sx={{ width: '300px' }}
                    />
                    <Button className={classes.btnFilter}>Filter</Button>

                </Box>
            </Stack>
            <Stack sx={{ textAlign: 'center', alignItems: 'center', mt: 2 }}>
                <Pagination count={data?.data.total_pages}
                            shape="rounded"
                            page={page}
                            onChange={(_, _page) => {
                              setPage(_page)
                            }}/>
            </Stack>
        </AdminLayout>
  )
}
