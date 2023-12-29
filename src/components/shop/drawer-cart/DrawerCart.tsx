import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  CardMedia,
  Divider,
  SwipeableDrawer,
  Typography,
  Stack
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'
import { theme } from '@src/theme'
import Link from 'next/link'
import useStyles from '@src/components/shop/drawer-cart/DrawerCart.styles'
import { IProduct } from '@src/api/interface'

interface DrawerCartProps {
  open: boolean
  onClose: () => void
}

export function DrawerCart ({ open, onClose }: DrawerCartProps) {
  const { classes } = useStyles()
  const [cartItems, setCartItems] = useState<IProduct[]>([])
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') ?? '[]')
    setCartItems(cart)
  }, [])
  const handleDelete = (itemId: string) => {
    const updatedCart = cartItems.filter((item) => item._id !== itemId)
    setCartItems(updatedCart)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
  }
  return (
        <SwipeableDrawer anchor="right" open={open} onClose={onClose} onOpen={() => {}}>
            <Box p={2} style={{ width: '500px', height: '100vh' }} sx={{ backgroundColor: '#d6d5c9' }}>
                <Box className={classes.titleWrapper}>
                    <Typography className={classes.title} variant="h5">
                        In Your Cart
                    </Typography>
                     <CloseIcon />

                </Box>
                <Divider sx={{ margin: '30px 0px' }} />
                <Typography>{`You have ${cartItems.length} item(s) in your cart`}</Typography>

                {cartItems.map((item: IProduct) => (
                    <Box key={item._id} className={classes.productCart}>
                        <CardMedia sx={{ width: '30%' }} component="img" alt="Product Image" height="140" image={process.env.NEXT_PUBLIC_BASE_IMAGE_URL + item.images[0]} />
                        <Box className={classes.rightPartCart}>
                            <Stack direction={'row'} sx={{ width: '300px' }} justifyContent={'space-between'}>
                                <Typography fontWeight={'bold'}>{item.name}</Typography>
                                <Button onClick={() => { handleDelete(item._id) }}> <DeleteIcon sx={{ color: theme.palette.primary.main }} /></Button>
                            </Stack>
                            <Stack direction="row" justifyContent={'space-between'} alignItems={'center'} display={'flex'}>
                                <Typography fontWeight={'bold'}>Quantity:{item.quantity}</Typography>
                                <Typography fontWeight={'bold'}>Price:{`$${item.price}`}</Typography>
                            </Stack>
                        </Box>
                    </Box>
                ))}

                <Link href="/checkout" passHref>
                    <Button className={classes.btn}>Check Out</Button>
                </Link>
            </Box>
        </SwipeableDrawer>
  )
}
