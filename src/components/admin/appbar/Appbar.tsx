import React from 'react'
import { AppBar, Avatar, Box, TextField, Toolbar, Typography } from '@mui/material'

import useStyles from './Appbar.styles'

const Appbar: React.FC = () => {
  const { classes } = useStyles()

  return (
		<AppBar position="sticky" color="primary" className={classes.appBar}>
			<Typography variant="h5"
						sx={{ display: { xs: 'none', sm: 'block' }, ml: '3rem' }}>
				Lumos
			</Typography>
			<Toolbar variant="dense" sx={{ flex: 1 }}>
				<Box className={classes.leftBarWrapper}>
					<TextField placeholder="Search" style={{ width: '50%' }}/>
				</Box>
				<Box className={classes.rightBarWrapper}>
					<Typography fontWeight={'bold'}>James Sullivan
					</Typography>
					<Avatar
						alt="Remy Sharp"
						src="/images/introvert.jpeg"
						sx={{ width: 56, height: 56 }}
					/>
				</Box>
			</Toolbar>
		</AppBar>
  )
}

export { Appbar }
