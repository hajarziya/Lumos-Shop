import { AdminLayout } from '@src/components/admin'
import useStyles from './SubCategoriesPage.styles'
import {
  Box,
  Button,
  Pagination, Popover,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useSubCategories } from '@src/api'
import moment from 'moment'
import React, { useMemo, useState } from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote'

export function SubCategoriesPage () {
  const { classes } = useStyles()
  const [page, setPage] = useState(1)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)
  const id = <MoreVertIcon/> ? 'Edit' : undefined

  const { data } = useSubCategories({ page })
  const subCategories = useMemo(() => data?.data.data.subcategories ?? [], [data])

  return (
		<>
			<AdminLayout>
				<Typography fontWeight={'bold'} variant={'h5'}
							sx={{ marginLeft: '120px', marginBottom: '20px' }}>Sub Categories</Typography>
				<Box className={classes.container}>
					<Table className={classes.tableWrapper}>
						<TableHead>
							<TableRow>
								<TableCell>Title</TableCell>
								<TableCell>Category</TableCell>
								<TableCell>Active</TableCell>
								<TableCell>Actions</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{subCategories.map(subcategories => <TableRow key={subcategories._id}>
								<TableCell>{subcategories.name}</TableCell>
								<TableCell>{subcategories.category.name}</TableCell>
								<TableCell>{moment(subcategories.createdAt).format('DD/MM/YYYY HH:mm')}</TableCell>
								<TableCell>
									<Button aria-describedby={id} variant="contained"
											onClick={handleClick}><MoreVertIcon/></Button>
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
							</TableRow>)}

						</TableBody>
					</Table>
					<Stack sx={{ textAlign: 'center', alignItems: 'center' }}>
						<Pagination className={classes.pagination}
									count={data?.data.total_pages}
									shape="rounded"
									page={page}
									onChange={(_, _page) => { setPage(_page) }}
						/>
					</Stack>
				</Box>
			</AdminLayout>
		</>
  )
}
