import { Box, Button, Checkbox, Divider, FormControlLabel, Paper, TextField, Typography } from '@mui/material'

import useStyles from './CheckoutPage.styles'
import CardMedia from '@mui/material/CardMedia'
import { Appbar } from '@src/components/shop/appbar'
import React, { useEffect, useState } from 'react'
import { useCreateOrder, useSignup } from '@src/api'
import { SignupSchema } from './validation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import { generateTrackingNumber } from '@src/templates/shop/checkout/utils'
import { useSearchParams } from 'next/navigation'
import { SuccessModal, FailModal } from '@src/templates/shop/checkout/Modal'
import { DatePicker } from '@mui/x-date-pickers'
import { useCartContext } from '@src/context/CartContext'

export function CheckoutPage () {
  const { classes } = useStyles()
  const { push } = useRouter()
  const searchParams = useSearchParams()
  const tn = searchParams.get('tn')
  const result = searchParams.get('result')
  const { cart, updateCart } = useCartContext()
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showFailModal, setShowFailModal] = useState(false)

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + (item?.price ?? 0), 0)
  }
  const { mutate: createOrder } = useCreateOrder({
    onSuccess: () => {
      updateCart([])
      localStorage.removeItem(tn as string)
      setShowSuccessModal(true)
    },
    onError: () => {
      setShowFailModal(true)
    }
  })

  const { mutate: createUser } = useSignup({
    onSuccess: (response) => {
      if (response.data.status === 'success') {
        localStorage.setItem('user_token', response.data.token.accessToken)
        localStorage.setItem('user_id', response.data.data.user._id)

        const products: any[] = []
        cart.map((item) => products.push({ product: item._id, count: item.quantity }))
        createOrder({
          user: response.data.data.user._id,
          products,
          deliveryStatus: false
        })
      }
    }
  })
  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(SignupSchema)
  })

  const onSignup = handleSubmit(({ username, password, firstname, lastname, phoneNumber, address }) => {
    const trackingNumber = generateTrackingNumber()

    localStorage.setItem(trackingNumber, JSON.stringify({
      userInfo: {
        username,
        address,
        password,
        firstname,
        lastname,
        phoneNumber
      },
      cart
    }))
    push('http://localhost:3001/payment/' + trackingNumber)
  })

  useEffect(() => {
    console.log({ tn }, { result })
    if (tn && result) {
      if (result === 'success') {
        const orderInfo = JSON.parse(localStorage.getItem(tn) ?? '{}')
        if (orderInfo.userInfo) {
          createUser({
            username: orderInfo.userInfo.username,
            address: orderInfo.userInfo.address,
            password: orderInfo.userInfo.password,
            firstname: orderInfo.userInfo.firstname,
            lastname: orderInfo.userInfo.lastname,
            phoneNumber: orderInfo.userInfo.phoneNumber
          })
        }
      } else if (result === 'fail') {
        setShowFailModal(true)
      }
    }
  }, [tn, result])

  return (<>
            <Appbar/>
            <Box className={classes.countainer}>
                {!showSuccessModal && !showFailModal && (
                    <>
                        <form onSubmit={onSignup} className={classes.wrapperForm}>
                            <Typography fontWeight={'bold'} variant="h4">Shipping Address</Typography>
                            <Box width={'100%'} gap={'10px'} display={'flex'} justifyContent={'space-between'}>
                              <Box width={'50%'}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="username"
                                    multiline
                                    maxRows={4}
                                    fullWidth
                                    {...register('username')}

                                />
                                {errors?.username && (
                                    <Typography style={{ color: 'indianred', fontSize: '12px' }}>{errors.username.message}</Typography>
                                )}
                              </Box>
                                <Box width={'50%'}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Password"
                                    multiline
                                    maxRows={4}
                                    fullWidth
                                    {...register('password')}
                                />
                                {errors?.password && (
                                    <Typography style={{ color: 'indianred', fontSize: '12px' }}>{errors.password.message}</Typography>
                                )}
                                </Box>
                            </Box>
                            <Box width={'100%'} gap={'10px'} display={'flex'} justifyContent={'space-between'}>
                              <Box width={'50%'}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Firstname"
                                    multiline
                                    maxRows={4}
                                    fullWidth
                                    {...register('firstname')}

                                />
                                {errors?.firstname && (
                                    <Typography style={{ color: 'indianred', fontSize: '12px' }}>{errors.firstname.message}</Typography>
                                )}
                              </Box>
                              <Box width={'50%'}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Lastname"
                                    multiline
                                    maxRows={4}
                                    fullWidth
                                    {...register('lastname')}
                                />
                                {errors?.lastname && (
                                    <Typography style={{ color: 'indianred', fontSize: '12px' }}>{errors.lastname.message}</Typography>
                                )}
                              </Box>
                            </Box>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Address"
                                multiline
                                maxRows={10}
                                {...register('address')}
                            />
                            <Box width={'100%'} gap={'10px'} display={'flex'} justifyContent={'space-between'}>
                              <Box width={'100%'}>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Phone Number"
                                    multiline
                                    maxRows={13}
                                    fullWidth

                                    {...register('phoneNumber')}
                                />
                                {errors?.phoneNumber && (
                                    <Typography style={{ color: 'indianred', fontSize: '12px' }}>{errors.phoneNumber.message}</Typography>
                                )}
                              </Box>

                              <DatePicker label="Basic date picker" />
                            </Box>
                            <Box>
                                <FormControlLabel control={<Checkbox/>} label="Set as default shipping address"/>
                            </Box>
                            <Box className={classes.saveBtnWrapper}>
                                <Button type={'submit'} className={classes.saveBtn}>Save & Continue</Button>
                            </Box>
                            <Divider/>

                        </form>
                        <Paper elevation={8} className={classes.paper}>

                            <Typography fontWeight={'bold'}>Cart Summary</Typography>
                            <Typography fontWeight={'bold'} fontSize={'14px'}
                                        marginTop={'10px'}>{cart.length} Item</Typography>
                            {cart.map((item) => (
                                <Box key={item._id} >
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
                    </>
                )}
                {showSuccessModal && <SuccessModal/>}
                {showFailModal && <FailModal/>}

            </Box>
        </>
  )
}
