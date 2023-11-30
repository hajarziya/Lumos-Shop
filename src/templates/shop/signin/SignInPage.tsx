import React, { useState } from 'react'
import { Box, Button, Divider, TextField, Typography } from '@mui/material'
import useStyles from './SignInPage.styles'
import Link from 'next/link'

export function SignInPage () {
  const { classes } = useStyles()
  const [showEnterEmail, setShowEnterEmail] = useState(true)

  const handleContinueClick = () => {
    setShowEnterEmail(false)
  }

  return (
		<>
			<Box className={classes.container}>
				<Typography variant="h3" fontWeight="bold">Lumos</Typography>
			</Box>
			<Divider/>
			{showEnterEmail ? <EnterEmail onContinueClick={handleContinueClick}/> : <EnterPassword/>}
		</>
  )
}

interface EnterEmailProps {
  onContinueClick: () => void
}

export function EnterEmail ({ onContinueClick }: EnterEmailProps) {
  const { classes } = useStyles()
  return (
		<Box className={classes.wrapper}>
			<Typography variant="h6">Enter your email address to sign in or to create an account</Typography>
			<TextField className={classes.textField} id="outlined-Email-input" label="Email Address" type="email"
					   autoComplete="current-password"/>
			<Button className={classes.btn} onClick={onContinueClick}>Continue</Button>
		</Box>
  )
}

export function EnterPassword () {
  const { classes } = useStyles()
  return (
		<Box className={classes.wrapper}>
			<Typography variant="h6">Enter password to sign in or to create an account</Typography>
			<TextField className={classes.textField} id="outlined-password-input" label="Password" type="password"
					   autoComplete="current-password"/>
			<Link href="/">
				<Button className={classes.btn}>Sign In</Button>
			</Link>
		</Box>
  )
}
