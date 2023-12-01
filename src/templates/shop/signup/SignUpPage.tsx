import { Box, Divider, TextField, Typography, FormControlLabel, Checkbox, Button } from '@mui/material'
import React from 'react'
import useStyles from '@src/templates/shop/signup/SignUpPage.styles'
import Link from 'next/link'

export function SignUpPage () {
  const { classes } = useStyles()
  return (
      <>
      <Box className={classes.container}>
          <Typography variant="h3" fontWeight="bold">Lumos</Typography>
      </Box>
          <Divider/>
      <Box className={classes.wrapper}>
          <Typography variant="h3">Creat your Account</Typography>
          <Box className={classes.wrapperTextFildFirst}>
              <TextField id="outlined-basic" label="First name" variant="outlined"></TextField>
              <TextField id="outlined-basic" label="Last name" variant="outlined"></TextField>
          </Box>
          <TextField sx={{ width: '26.5rem' }} id="outlined-basic" label="Last name" variant="outlined"></TextField>
          <Box className={classes.wrapperTextFildFirst}>
              <TextField id="outlined-basic" label="First name" variant="outlined"></TextField>
              <TextField id="outlined-basic" label="Last name" variant="outlined"></TextField>
          </Box>
          <FormControlLabel required control={<Checkbox />} label="Show password" />
          <Link href='/profile'>
          <Button className={classes.btn}>Sign Up</Button>
          </Link>
      </Box>

      </>
  )
}
