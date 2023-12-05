import {
  AppBar,
  Box,
  Button,
  TextField,
  Typography,
  Link,
  OutlinedInput,
  InputAdornment,
  IconButton,
  InputLabel, FormControl
} from '@mui/material'
import useStyles from './LogInPage.styles'
import { VisibilityOff, Visibility } from '@mui/icons-material'
import React from 'react'
import { useLogin } from '@src/api'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginSchema } from './validation'

export function LoginPage () {
  const [showPassword, setShowPassword] = React.useState(false)
  const { classes } = useStyles()
  const { replace } = useRouter()

  const { mutate, isLoading } = useLogin({
    onSuccess: (response) => {
      console.log(response)
      if (response.data.status === 'success') {
        localStorage.setItem('token', response.data.token.accessToken)
        replace('/admin/orders')
      }
    }
  })

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(LoginSchema)
  })

  const onLogin = handleSubmit(({ username, password }) => {
    mutate({
      username,
      password
    })
  })
  const handleClickShowPassword = () => { setShowPassword((show) => !show) }
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
		<>
			<AppBar position="sticky" className={classes.appBar}>
				<Link href="/" underline="none">
					<Typography variant="h2" className={classes.logo}>
						Lumos
					</Typography>
				</Link>
			</AppBar>
			<Box className={classes.wrapperBox}>
				<form onSubmit={onLogin}>
					<TextField
						id="outlined-multiline-flexible"
						label="Username"
						multiline
						maxRows={4}
						sx={{ width: '300px' }}
						type="username"
						{...register('username')}
					/>
					{errors?.username && (
						<div style={{ color: 'red' }}>{errors.username.message}</div>
					)}
					<FormControl sx={{ mt: 2, width: '100%' }} variant="outlined">
						<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
						<OutlinedInput
							id="outlined-adornment-password"
							type={showPassword ? 'text' : 'password'}
							inputProps={{ ...register('password') }}
							endAdornment={
								<InputAdornment position="end">
									<IconButton
										aria-label="toggle password visibility"
										onClick={handleClickShowPassword}
										onMouseDown={handleMouseDownPassword}
										edge="end"
									>
										{showPassword ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</InputAdornment>
							}
							label="Password"
						/>
					</FormControl>
					{errors?.password && (
						<div style={{ color: 'red' }}>{errors.password.message}</div>
					)}
					<Button
						type="submit"
						variant="contained"
						sx={{ width: '300px', height: '50px', fontWeight: 'bold', marginTop: '30px' }}
						disabled={isLoading}
					>
						{isLoading ? 'Logging in...' : 'Login'}
					</Button>
				</form>
				{/* {isError && <div style={{ color: 'red' }}>Authentication failed</div>} */}
			</Box>
		</>
  )
}
