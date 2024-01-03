import useStyles from './Footer.styles'
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { theme } from '@src/theme'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'

export function Footer () {
  const { classes } = useStyles()
  return (
		<>
			<Box className={classes.container}>
				<Box className={classes.wrapper}>
					<h2>About Us</h2>
					<Button className={classes.btnAndFooter}>About lumos</Button>
					<Button className={classes.btnAndFooter}>Lumos Professional</Button>
					<Button className={classes.btnAndFooter}>Gift Cards</Button>
					<Button className={classes.btnAndFooter}>Lumos Credit Card</Button>
					<Button className={classes.btnAndFooter}>Lumos Financing</Button>
					<Button className={classes.btnAndFooter}>Careers</Button>
					<Button className={classes.btnAndFooter}>Sell on Lumos</Button>
					<Button className={classes.btnAndFooter}>Investor Relations</Button>
					<Button className={classes.btnAndFooter}>Advertise With Us</Button>
					<Button className={classes.btnAndFooter}>Locations</Button>
				</Box>
				<Box className={classes.wrapper}>
					<h2>Customer Service</h2>
					<Button className={classes.btnAndFooter}>My Orders</Button>
					<Button className={classes.btnAndFooter}>My Account</Button>
					<Button className={classes.btnAndFooter}>Track My Order</Button>
					<Button className={classes.btnAndFooter}>Lumos Accessivility Statement </Button>
					<Button className={classes.btnAndFooter}>Return Policy</Button>
					<Button className={classes.btnAndFooter}>Help Center</Button>
					<Button className={classes.btnAndFooter}>Product Recalls</Button>
				</Box>
				<Box className={classes.wrapper}>
					<h2>About Us</h2>
					<Typography style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Open. Closes 11:59 PM
						Mon - Fri: 8:00 AM - 11:59 PM
						Sat: 8:00 AM - 8:00 PM
						Sun: 9:00 AM - 6:00 PM

						All times Eastern

					</Typography>
					<h2>About Lumos</h2>
					<Typography style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>Open. Closes 11:59 PM
						Mon - Fri: 8:00 AM - 11:59 PM
						Sat: 8:00 AM - 8:00 PM
						Sun: 9:00 AM - 6:00 PM

						All times Eastern

					</Typography>

				</Box>

			</Box>
			<Divider/>
			<Stack gap={'30px'} direction={'row'} sx={{ margin: '30px 50px' }} >
			<InstagramIcon className={classes.icons}/>
			<GitHubIcon className={classes.icons}/>
			<LinkedInIcon className={classes.icons}/>
			<TwitterIcon className={classes.icons}/>
			</Stack>
			<Stack gap={'10px'} direction={'row'} sx={{ margin: '0px 50px', fontWeight: 'bold' }} >
				<Button className={classes.btnAndFooter}>Terms of Use</Button>
				<Button className={classes.btnAndFooter}>Privacy Policy </Button>
				<Button className={classes.btnAndFooter}>Your Privacy Rights & Choices</Button>
			</Stack>
			<Stack sx={{ margin: '0px 0px 30px 55px' }} >
				<Typography className={classes.footerAddress}>@ 2002-2024 by Lumos LLC,4 Copley Place,7th Floor,Boston,MA 02116</Typography>
				</Stack>
		</>
  )
}
