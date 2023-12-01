import useStyles from './OrderPage.styles'
import React from 'react'
import { AdminLayout } from '@src/components/admin'
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography, Popover } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import EditNoteIcon from '@mui/icons-material/EditNote'

export function OrdersPage () {
  const { classes } = useStyles()
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = <MoreVertIcon/> ? 'Edit' : undefined

  return (
		<AdminLayout>
			<Box className={classes.container}>
				<Box className={classes.form}>
					<Typography>Filter</Typography>
					<TextField
						label="Search Name"
						sx={{ width: '300px' }}
					/>
					<TextField
						label="Status"
						sx={{ width: '300px' }}
					/>

					<TextField
						label="User"
						sx={{ width: '300px' }}
					/>

					<TextField
						label="Amount"
						sx={{ width: '300px' }}
					/>
					<Button>Filter</Button>

				</Box>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Order Number</TableCell>
							<TableCell>User</TableCell>
							<TableCell>Products</TableCell>
							<TableCell>Status</TableCell>
							<TableCell>Amount</TableCell>
							<TableCell>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>1234455</TableCell>
							<TableCell>HajarZiya</TableCell>
							<TableCell>book</TableCell>
							<TableCell>deliverd</TableCell>
							<TableCell>$30</TableCell>
							<TableCell>
								<Button aria-describedby={id} variant="contained" onClick={handleClick}><MoreVertIcon/></Button>
								<Popover
									className={classes.popver}
									id={id}
									open={open}
									anchorEl={anchorEl}
									onClose={handleClose}
									anchorOrigin={{
									  vertical: 'bottom',
									  horizontal: 'left'
									}}
								>
									<Typography sx={{ padding: '1px 10px' }}><EditNoteIcon/> Edit</Typography>
								</Popover>
							</TableCell>

						</TableRow>
						<TableRow>
							<TableCell>1234455</TableCell>
							<TableCell>HajarZiya</TableCell>
							<TableCell>book</TableCell>
							<TableCell>deliverd</TableCell>
							<TableCell>$30</TableCell>
							<TableCell>
								<Button aria-describedby={id} variant="contained" onClick={handleClick}><MoreVertIcon/></Button>
								<Popover
									className={classes.popver}
									id={id}
									open={open}
									anchorEl={anchorEl}
									onClose={handleClose}
									anchorOrigin={{
									  vertical: 'bottom',
									  horizontal: 'left'
									}}
								>
									<Typography sx={{ padding: '1px 10px' }}><EditNoteIcon/> Edit</Typography>
								</Popover>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>1234455</TableCell>
							<TableCell>HajarZiya</TableCell>
							<TableCell>book</TableCell>
							<TableCell>deliverd</TableCell>
							<TableCell>$30</TableCell>
							<TableCell>
								<Button aria-describedby={id} variant="contained" onClick={handleClick}><MoreVertIcon/></Button>
								<Popover
									className={classes.popver}
									id={id}
									open={open}
									anchorEl={anchorEl}
									onClose={handleClose}
									anchorOrigin={{
									  vertical: 'bottom',
									  horizontal: 'left'
									}}
								>
									<Typography sx={{ padding: '1px 10px' }}><EditNoteIcon/> Edit</Typography>
								</Popover>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Box>
		</AdminLayout>
  )
}
