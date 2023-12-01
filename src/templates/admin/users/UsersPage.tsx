import { AdminLayout } from '@src/components/admin'
import {
  Avatar,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material'
import useStyles from './UsersPage.styles'

export function UsersPage () {
  const { classes } = useStyles()
  return (
		<AdminLayout>
			<Box className={classes.container}>
				<Box className={classes.form}>
					<Typography>Filter</Typography>
					<TextField
						label="Name"
						sx={{ width: '300px' }}
					/>
					<TextField
						label="Gender"
						sx={{ width: '300px' }}
					/>

					<TextField
						label="Active"
						sx={{ width: '300px' }}
					/>

					<Button>Filter</Button>

				</Box>
				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell>Gsm Number</TableCell>
							<TableCell>Avatar</TableCell>
							<TableCell>First Name</TableCell>
							<TableCell>Last Name </TableCell>
							<TableCell>Gender</TableCell>
							<TableCell>Is Active</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						<TableRow>
							<TableCell>1234455</TableCell>
							<TableCell><Avatar></Avatar></TableCell>
							<TableCell>Hajar</TableCell>
							<TableCell>Ziya</TableCell>
							<TableCell>Gender</TableCell>
							<TableCell>Yes</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>1234455</TableCell>
							<TableCell><Avatar></Avatar></TableCell>
							<TableCell>Hajar</TableCell>
							<TableCell>Ziya</TableCell>
							<TableCell>Gender</TableCell>
							<TableCell>Yes</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>1234455</TableCell>
							<TableCell><Avatar></Avatar></TableCell>
							<TableCell>Hajar</TableCell>
							<TableCell>Ziya</TableCell>
							<TableCell>Gender</TableCell>
							<TableCell>Yes</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>1234455</TableCell>
							<TableCell><Avatar></Avatar></TableCell>
							<TableCell>Hajar</TableCell>
							<TableCell>Ziya</TableCell>
							<TableCell>Gender</TableCell>
							<TableCell>Yes</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>1234455</TableCell>
							<TableCell><Avatar></Avatar></TableCell>
							<TableCell>Hajar</TableCell>
							<TableCell>Ziya</TableCell>
							<TableCell>Gender</TableCell>
							<TableCell>Yes</TableCell>
						</TableRow>

					</TableBody>
				</Table>
			</Box>
		</AdminLayout>
  )
}
