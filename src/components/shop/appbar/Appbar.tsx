import React, { useState } from 'react'
import { AppBar, Box, Button, IconButton, TextField, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ManageAccounts from '@mui/icons-material/ManageAccounts'
import useStyles from './Appbar.styles'
import Link from 'next/link'
import { DrawerCart } from '../drawer-cart'

const Appbar: React.FC = () => {
  const { classes } = useStyles()
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const handleDrawerOpen = () => {
    setDrawerOpen(true)
  }

  const handleDrawerClose = () => {
    setDrawerOpen(false)
  }

  return (
		<Box>
			<AppBar position="static" color="primary" className={classes.appBar}>
				<Toolbar variant="dense">
					<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} className={classes.btnText}>
						<MenuIcon/>
					</IconButton>
					<Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' } }}>
						MUI
					</Typography>
					<Typography variant="h3" noWrap component="div"
								sx={{ display: { xs: 'none', sm: 'block' }, ml: '3rem' }}>
						Lumos
					</Typography>
				</Toolbar>
				<TextField placeholder="Search" style={{ width: '50%' }}/>
				<div>
					<Link href="/admin" passHref>
						<Button variant="text" endIcon={<ManageAccounts/>} className={classes.btnText}>
							Admin
						</Button>
					</Link>
					<Link href="/signin" passHref>
						<Button variant="text" endIcon={<AccountCircleIcon/>} className={classes.btnText}>
							Sign in
						</Button>
					</Link>
					<Button variant="text" endIcon={<ShoppingCartIcon/>} className={classes.btnText}
							onClick={handleDrawerOpen}>
						Cart
					</Button>
				</div>
			</AppBar>
			<DrawerCart open={isDrawerOpen} onClose={handleDrawerClose}/>
		</Box>
  )
}

export { Appbar }
