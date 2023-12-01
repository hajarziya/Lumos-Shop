import useStyles from './Footer.styles'
import { Box, Button, Divider, Typography } from '@mui/material'
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
					<Button>About Lumos</Button>
					<Button>About Lumos</Button>
					<Button>About Lumos</Button>
					<Button>About Lumos</Button>
					<Button>About Lumos</Button>
					<Button>About Lumos</Button>
				</Box>
				<Box className={classes.wrapper}>
					<h2>About Us</h2>
					<Button>About Lumos</Button>
					<Button>About Lumos</Button>
					<Button>About Lumos</Button>
					<Button>About Lumos</Button>
					<Button>About Lumos</Button>
					<Button>About Lumos</Button>
				</Box>
				<Box className={classes.wrapper}>
					<h2>About Us</h2>
					<Typography style={{ color: theme.palette.primary.main }}>Open. Closes 11:59 PM
						Mon - Fri: 8:00 AM - 11:59 PM
						Sat: 8:00 AM - 8:00 PM
						Sun: 9:00 AM - 6:00 PM

						All times Eastern

					</Typography>
					<h2>About Lumos</h2>
					<Typography style={{ color: theme.palette.primary.main }}>Open. Closes 11:59 PM
						Mon - Fri: 8:00 AM - 11:59 PM
						Sat: 8:00 AM - 8:00 PM
						Sun: 9:00 AM - 6:00 PM

						All times Eastern

					</Typography>

				</Box>

			</Box>
			<Divider/>
			<InstagramIcon/>
			<GitHubIcon/>
			<LinkedInIcon/>
			<TwitterIcon/>
		</>
  )
}
