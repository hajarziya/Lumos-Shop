import { AppBar, Box, Button, TextField, Typography } from '@mui/material'
import useStyles from './LogInPage.styles'
import { useCallback, useState } from 'react'
import { useLogin } from '@src/api'
import { useRouter } from 'next/router'

export function LoginPage () {
  const { classes } = useStyles()
  const { replace } = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const { mutate, isLoading, isError } = useLogin({
    onSuccess: (response) => {
      console.log(response)
      if (response.data.status === 'success') {
        localStorage.setItem('token', response.data.token.accessToken)
        replace('/')
      }
    }
  })

  const onLogin = useCallback(() => {
    mutate({
      username,
      password
    })
  }, [username, password])

  return (
		<>
			<AppBar position="sticky" className={classes.appBar}>
				<Typography variant="h5"
							sx={{ display: { xs: 'none', sm: 'block' }, ml: '3rem', fontWeight: 'bold' }}>Lumos</Typography>
			</AppBar>
			<Box className={classes.wrapperBox}>
				<TextField
					id="outlined-multiline-flexible"
					label="Username"
					multiline
					maxRows={4}
					sx={{ width: '300px' }}
					value={username}
					type="username"
					onChange={(e) => {
					  setUsername(e.target.value)
					}}
				/>
				<TextField
					id="outlined-multiline-flexible"
					label="Password"
					multiline
					maxRows={4}
					sx={{ width: '300px' }}
					value={password}
					type="password"
					onChange={(e) => {
					  setPassword(e.target.value)
					}}

				/>
				<Button type="button" variant="contained" sx={{ width: '300px', height: '50px', fontWeight: 'bold' }}
						onClick={onLogin} disabled={isLoading}>{isLoading ? 'Logging in...' : 'Login'}</Button>
				{isError && <div style={{ color: 'red' }}>Authentication failed</div>}
			</Box>
		</>
  )
}
