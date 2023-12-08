import React, { useState } from 'react'
import { AppBar, Box, Button, Divider, TextField, Typography } from '@mui/material'
import useStyles from './SignInPage.styles'
import Link from 'next/link'

export function SignInPage () {
  const { classes } = useStyles()

  return (
		<>
			<Link href='/'>
			<AppBar className={classes.header}>
				<Typography className={classes.logo} variant="h2">Lumos</Typography>
			</AppBar>
			</Link>
			<Box className={classes.wrapper}>
			<Typography variant="h6" fontWeight={'bold'} className={classes.typograghy}>Enter your email and password address to sign in or to create an account</Typography>
			<TextField className={classes.textField} id="outlined-Email-input" label="Email Address" type="email"
					   autoComplete="current-password"/>
			<TextField className={classes.textField} id="outlined-password-input" label="Password" type="password"
					   autoComplete="current-password"/>
			<Link href="/">
				<Button className={classes.btn}>Sign In</Button>
			</Link>
			<Box className={classes.wrapperSignupBtn}>
				<Typography className={classes.typograghy} variant="h6">As a new user, please provide the following details to create your account:</Typography>
				<Link href="/signup">
				<Button className={classes.btn}>Sign Up</Button>
				</Link>
			</Box>
			</Box>
		</>
  )
}
