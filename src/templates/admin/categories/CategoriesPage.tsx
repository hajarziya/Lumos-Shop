import { AdminLayout } from '@src/components/admin'
import useStyles from './CategoriesPage.styles'
import { Box, Pagination, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'

export function CategoriesPage () {
  const { classes } = useStyles()
  return (
		<>
			<AdminLayout>
				<Typography fontWeight={'bold'} variant={'h5'}
							sx={{ marginLeft: '120px', marginBottom: '20px' }}>Categories</Typography>
				<Box className={classes.container}>
					<Table className={classes.tableWrapper}>
						<TableHead>
							<TableRow>
								<TableCell>Title</TableCell>
								<TableCell>Active</TableCell>
								<TableCell>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
								<TableCell>
									<MoreVertIcon/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
								<TableCell>
									<MoreVertIcon/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
								<TableCell>
									<MoreVertIcon/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
								<TableCell>
									<MoreVertIcon/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
								<TableCell>
									<MoreVertIcon/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
								<TableCell>
									<MoreVertIcon/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
								<TableCell>
									<MoreVertIcon/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
								<TableCell>
									<MoreVertIcon/>
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
								<TableCell>
									<MoreVertIcon/>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
					<Stack sx={{ textAlign: 'center', alignItems: 'center' }}>
						<Pagination className={classes.pagination} count={10} shape="rounded"/>
					</Stack>
				</Box>
			</AdminLayout>
		</>
  )
}
