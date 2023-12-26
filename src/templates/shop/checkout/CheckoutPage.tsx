import { Box, Button, Checkbox, Divider, FormControlLabel, Paper, TextField, Typography } from '@mui/material'
import useStyles from './CheckoutPage.styles'
import CardMedia from '@mui/material/CardMedia'
import { Appbar } from '@src/components/shop/appbar'
import { useEffect, useState } from 'react'
import { IProduct } from '@src/api/interface'
import { useCreateOrder, useSignup } from '@src/api'
import { SingupSchema } from './validation'

export function CheckoutPage () {
  const { classes } = useStyles()
  const [cartItems, setCartItems] = useState<IProduct[]>([])
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') ?? '[]')
    setCartItems(cart)
  }, [])
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0)
  }
  const { mutate: createOrder } = useCreateOrder()
  const { mutate: createUser, isLoading } = useSignup({
    onSuccess: (response) => {
      if (response.data.status === 'success') {
        localStorage.setItem('user_token', response.data.token.accessToken)
        localStorage.setItem('user_id', response.data.data.user._id)

        const cart: any[] = []
        cartItems.map((item) => cart.push({ product: item._id, count: item.quantity }))
        createOrder({
          user: response.data.data.user._id,
          products: cart,
          deliveryStatus: false
        })
      }
    }
  })
  return (<>

            <Appbar/>
            <Box className={classes.countainer}>
                <Box className={classes.wrapperForm}>
                    <Typography fontWeight={'bold'} variant="h4">Shipping Address</Typography>
                    <Box width={'100%'} gap={'10px'} display={'flex'} justifyContent={'space-between'}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="username"
                            multiline
                            maxRows={4}
                            fullWidth

                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Password"
                            multiline
                            maxRows={4}
                            fullWidth
                        />
                    </Box>
                    <Box width={'100%'} gap={'10px'} display={'flex'} justifyContent={'space-between'}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Firstname"
                            multiline
                            maxRows={4}
                            fullWidth

                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Lastname"
                            multiline
                            maxRows={4}
                            fullWidth
                        />
                    </Box>
                    <TextField
                        id="outlined-multiline-flexible"
                        label="Address"
                        multiline
                        maxRows={4}
                    />
                    <Box width={'100%'} gap={'10px'} display={'flex'} justifyContent={'space-between'}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Phone Number"
                            multiline
                            maxRows={13}
                            fullWidth
                            helperText="Used to contact you with delivery info (mobile preferred)."

                        />
                        <TextField
                            id="outlined-multiline-flexible"
                            label="date arive"
                            multiline
                            maxRows={10}
                            fullWidth
                        />
                    </Box>
                    <Box>
                        <FormControlLabel required control={<Checkbox/>} label="Set as default shipping address"/>
                    </Box>
                    <Box className={classes.saveBtnWrapper}>
                        <Button className={classes.saveBtn}>Save & Continue</Button>
                    </Box>
                    <Divider/>

                </Box>

                <Paper elevation={8} className={classes.paper}>

                    <Typography fontWeight={'bold'}>Cart Summary</Typography>
                    <Typography fontWeight={'bold'} fontSize={'14px'}
                                marginTop={'10px'}>{cartItems.length} Item</Typography>
                    {cartItems.map((item: IProduct) => (
                        <Box key={item._id}>
                            <CardMedia sx={{ width: '100px', margin: '10px 0px' }}
                                       component="img"
                                       height="90px"
                                       image={process.env.NEXT_PUBLIC_BASE_IMAGE_URL + item.images[0]}
                                       alt="Paella dish"
                            />
                            <Divider/>

                            <Box className={classes.itemPriceWrapper}>
                                <Typography fontWeight={'bold'}>{item.name}</Typography>
                                <Typography fontWeight={'bold'}>${item.price}</Typography>
                            </Box>
                            <Divider/>

                        </Box>
                    ))}
                    <Box className={classes.itemPriceWrapper}>
                        <Typography className={classes.total} fontWeight={'bold'}>Total</Typography>
                        <Typography className={classes.total}
                                    fontWeight={'bold'}>${calculateTotalPrice().toFixed(2)}</Typography>
                    </Box>
                </Paper>

            </Box>
        </>
  )
}
