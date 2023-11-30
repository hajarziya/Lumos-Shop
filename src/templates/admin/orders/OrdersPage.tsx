import useStyles from './OrderPage.styles'
import { AdminLayout } from '@src/components/admin'
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export function OrdersPage () {
  const { classes } = useStyles()
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
								<MoreVertIcon/>
							</TableCell>

						</TableRow>
						<TableRow>
							<TableCell>1234455</TableCell>
							<TableCell>HajarZiya</TableCell>
							<TableCell>book</TableCell>
							<TableCell>deliverd</TableCell>
							<TableCell>$30</TableCell>
							<TableCell>
								<MoreVertIcon/>
							</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>1234455</TableCell>
							<TableCell>HajarZiya</TableCell>
							<TableCell>book</TableCell>
							<TableCell>deliverd</TableCell>
							<TableCell>$30</TableCell>
							<TableCell>
								<MoreVertIcon/>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</Box>
		</AdminLayout>
  )
}
