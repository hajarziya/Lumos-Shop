import { Box, Avatar, Typography, Stack } from '@mui/material'
import { AdminLayout, ProductItem } from '@src/components/admin'
import useStyles from '@src/templates/admin/orders/show-order/ShowOrderPage.style'

export function ShowOrderPage () {
  const { classes } = useStyles()
  return (

       <AdminLayout>
           <Box className={classes.profileWrapper}>
    <Box className={classes.rightWrraperProfile}>
    <Avatar sx={{ width: '200px', height: '200px' }} alt="Remy Sharp" src="/images/profile.jpeg" />
    <Typography variant={'h5'}>Jessika Turner</Typography>
    {/* <Typography>ID #34</Typography> */}
    </Box>
    <Box className={classes.rightWrraperProfile}>
        <Stack className={classes.boxprofile} >
            <Typography>PHONE</Typography>
            <Typography>09138893748</Typography>
            </Stack>
        <Stack className={classes.boxprofile}>
            <Typography>DELIVERY TIME</Typography>
            <Typography>14:30</Typography>
        </Stack>
    </Box>
           </Box>
           <Typography variant={'h3'}>Show order</Typography>
    <Box className={classes.showOrderList}>
      <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
    </Box>

       </AdminLayout>

  )
}
