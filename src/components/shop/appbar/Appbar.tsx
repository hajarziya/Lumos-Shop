import React, { useState } from 'react'
import { AppBar, Box, Button, IconButton, TextField, Toolbar, Typography, Link } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ManageAccounts from '@mui/icons-material/ManageAccounts'
import useStyles from './Appbar.styles'
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
		<>
			<AppBar position="sticky" color="primary" className={classes.appBar}>
				<Toolbar variant="dense">
					<IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} className={classes.btnText}>
						<MenuIcon/>
					</IconButton>
					<Link href='/' underline="none">
						<Typography variant='h2' className={classes.logo} >
						Lumos
						</Typography>
					</Link>
				</Toolbar>
				<TextField placeholder="Search" style={{ width: '50%' }}/>
				<div>
					<Link href="/admin/login">
						<Button variant="text" endIcon={<ManageAccounts/>} className={classes.btnText}>
							Admin
						</Button>
					</Link>
					<Link href="/signin">
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
		</>
  )
}

export { Appbar }
