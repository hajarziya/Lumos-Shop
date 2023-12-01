import { Box, CardMedia, Divider, Typography, Card, Table, TableCell, TableRow, TableBody, Button } from '@mui/material'
import useStyles from '@src/templates/shop/profile/ProfilePage.styles'
import React from 'react'
import Link from 'next/link'

export function ProfilePage () {
  const { classes } = useStyles()
  return (
      <>
      <Box className={classes.container}>
        <Typography variant="h3" fontWeight="bold">Lumos</Typography>
      </Box>
  <Divider/>
        <Box className={classes.card}>
            <CardMedia
                component="img"
                height="540"
                sx={{ width: '30%' }}
                image="/images/profile.jpeg"
                alt="green iguana"
                />
            <Box>
            <Typography variant={'h4'} fontWeight={'bold'} sx={{ marginTop: '27rem' }}>Lizard Louise</Typography>
            <Typography variant={'h4'} fontWeight={'bold'}>lizardlouise3434@gmail.com</Typography>
            </Box>
        </Box>
          <Typography className={classes.table} variant={'h4'} fontWeight={'bold'}>Shopping Cart</Typography>
          <Table >
<TableRow>
    <TableCell>Product Name</TableCell>
    <TableCell>Price</TableCell>
    <TableCell>Quntity</TableCell>
</TableRow>
              <TableBody>
                  <TableRow>
                      <TableCell>Test product</TableCell>
                      <TableCell>$30</TableCell>
                      <TableCell>2</TableCell>
                  </TableRow>
              </TableBody>
          </Table>
          <Box className={classes.wrapper}>
              <Link href="/">
          <Button className={classes.btn}>Updaite Shopping Cart</Button>
              </Link>
              <Link href="/checkout">
          <Button className={classes.btn}>Proceed to Checkout</Button>
              </Link>
          </Box>
      </>
  )
}
