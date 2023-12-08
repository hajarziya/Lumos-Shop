import { AdminLayout } from '@src/components/admin'
import {
  Avatar,
  Box,
  Button, Pagination, Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography
} from '@mui/material'
import useStyles from './UsersPage.styles'
import { theme } from '@src/theme'
import React, { useMemo, useState } from 'react'
import { useUsers } from '@src/api'

export function UsersPage () {
  const { classes } = useStyles()
  const [page, setPage] = useState(1)
  const { data } = useUsers({ page })
  const users = useMemo(() => data?.data.data.users ?? [], [data])
  return (
		<AdminLayout>
			<Typography fontWeight={'bold'} variant={'h5'}
						sx={{ marginLeft: '10px', marginBottom: '20px', color: theme.palette.primary.dark }}>Users</Typography>
			<Box>
			<Box className={classes.container}>

				<Table className={classes.table}>
					<TableHead>
						<TableRow>
							<TableCell sx={{ fontWeight: 'bold' }}>Avatar</TableCell>

							<TableCell sx={{ fontWeight: 'bold' }}>First Name</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Last Name </TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
							<TableCell sx={{ fontWeight: 'bold' }}>Is Active</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map(user => <TableRow key={user._id}>
							<TableCell><Avatar></Avatar></TableCell>
							<TableCell>{user.firstname}</TableCell>
							<TableCell>{user.lastname}</TableCell>
							<TableCell>{user.address}</TableCell>
							<TableCell>Yes</TableCell>
						</TableRow>)}

					</TableBody>
				</Table>
				<Box className={classes.form}>
					<Typography sx={{ fontWeight: 'bold' }}>Filter</Typography>
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

					<Button className={classes.btnFilter}>Filter</Button>

				</Box>
			</Box>
			</Box>
			<Stack sx={{ textAlign: 'center', alignItems: 'center', mt: 2 }}>
				<Pagination count={data?.data.total_pages}
							shape="rounded"
							page={page}
							onChange={(_, _page) => {
							  setPage(_page)
							}}/>
			</Stack>
		</AdminLayout>
  )
}
