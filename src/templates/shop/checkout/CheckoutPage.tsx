import { AppBar, Box, Button, Checkbox, Divider, FormControlLabel, Paper, TextField, Typography } from '@mui/material'
import useStyles from './CheckoutPage.styles'
import CardMedia from '@mui/material/CardMedia'

export function CheckoutPage () {
  const { classes } = useStyles()
  return (<>
			<AppBar className={classes.header}>
				<Typography className={classes.logo} variant="h2">Lumos</Typography>
			</AppBar>
			<Box className={classes.countainer}>
				<Box className={classes.wrapperForm}>
					<Typography fontWeight={'bold'} variant="h4">Shipping Address</Typography>
					<TextField
						id="outlined-multiline-flexible"
						label="username"
						multiline
						maxRows={4}
					/>
					<TextField
						id="outlined-multiline-flexible"
						label="Address"
						multiline
						maxRows={4}
					/>
					<TextField
						id="outlined-multiline-flexible"
						label="Town/City"
						multiline
						maxRows={4}
					/>
					<TextField
						id="outlined-multiline-flexible"
						label="phone number"
						multiline
						helperText="Used to contact you with delivery info (mobile preferred)."
						maxRows={13}
					/>
					<Box>
						<FormControlLabel required control={<Checkbox/>} label="Set as default shipping address"/>
					</Box>
					<Box className={classes.saveBtnWrapper}>
						<Button className={classes.saveBtn}>Save & Continue</Button>
					</Box>
					<Divider/>

				</Box>
				<Paper elevation={8} className={classes.paper}>
					<Typography>Cart Summary</Typography>
					<Typography>1 Item</Typography>
					<CardMedia sx={{ width: '100px', margin: '10px 0px' }}
							   component="img"
							   height="90px"
							   image="images/tree.webp"
							   alt="Paella dish"
					/>
					<Divider/>
					<Box className={classes.itemPriceWrapper}>
						<Typography>Item Subtotal</Typography>
						<Typography>$69.99</Typography>
					</Box>
					<Box className={classes.itemPriceWrapper}>
						<Typography>Shipping</Typography>
						<Typography>Free</Typography>
					</Box>
					<Divider/>
					<Box className={classes.itemPriceWrapper}>
						<Typography fontWeight={'bold'}>Total</Typography>
						<Typography fontWeight={'bold'}>$69.99</Typography>
					</Box>
				</Paper>
			</Box>
		</>
  )
}
