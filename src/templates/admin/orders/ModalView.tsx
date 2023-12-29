// ModalView.tsx
import { Box, Table, TableCell, TableHead, TableRow, Typography, TableBody, Dialog, Button, Stack } from '@mui/material'
import useStyles from '@src/templates/admin/orders/OrderPage.styles'
import { IOrder } from '@src/api/interface'
import CloseIcon from '@mui/icons-material/Close'
import { useEditOrder } from '@src/api'
import moment from 'moment'

interface ModalViewProps {
  open: boolean
  order: IOrder | null
  handleClose: () => void
}

export function ModalView ({ open, handleClose, order }: ModalViewProps) {
  const { classes } = useStyles()
  const { mutate } = useEditOrder({ id: order?._id ?? '' }, {
    onSuccess: () => {
      handleClose()
    }
  })

  const handleDelivery = () => {
    mutate({ deliveryStatus: true })
  }
  return (

        <Dialog
            maxWidth={'xl'}
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <Box className={classes.modalContainer}>
                <Box className={classes.topwrapper}>
                    <Box marginBottom={'30px'} lineHeight={'40px'}>
                        <Typography fontWeight={'bold'}>Name:<span>{order?.user.username}</span></Typography>
                        <Typography fontWeight={'bold'}>Address:{order?.user.address} </Typography>
                        <Typography fontWeight={'bold'}>Phone Number:{order?.user.phoneNumber} </Typography>
                        <Typography fontWeight={'bold'}>Delivered At:{order?.user.createdAt}</Typography>
                        <Typography fontWeight={'bold'}>Created At:{order?.user.updatedAt}</Typography>
                    </Box>
                    <Button className={classes.btn} onClick={handleClose}><CloseIcon/></Button>
                </Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell className={classes.tableHead}>Title</TableCell>
                            <TableCell className={classes.tableHead}>Price</TableCell>
                            <TableCell className={classes.tableHead}>Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {order?.products.map((order) =>
                            <TableRow key={order.product?._id ?? '-'}>
                                <TableCell>{order.product?.name ?? '-'}</TableCell>
                                <TableCell>{order.product?.price ?? '-'}</TableCell>
                                <TableCell>{order?.count}</TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
                <Stack margin={'30px auto'} width={'50%'}>
                    {order?.deliveryStatus === false
                      ? (
                            <Button className={classes.btn} onClick={handleDelivery}
                                    disabled={order.deliveryStatus}>delivered</Button>
                        )
                      : (
                            <Typography fontWeight={'bold'}>delivery date: {moment(order.deliveryDate).format('DD/MM/YYYY HH:mm')}</Typography>
                        )}
                </Stack>
            </Box>

        </Dialog>
  )
}
