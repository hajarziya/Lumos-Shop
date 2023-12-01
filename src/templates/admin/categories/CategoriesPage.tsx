import { AdminLayout } from '@src/components/admin'
import useStyles from './CategoriesPage.styles'
import {
  Box,
  Button,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  Popover
} from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote'

export function CategoriesPage () {
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
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
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
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
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
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
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
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
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
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
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
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
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
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
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
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
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
								<TableCell>Fantastic</TableCell>
								<TableCell>Yes</TableCell>
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
					<Stack sx={{ textAlign: 'center', alignItems: 'center' }}>
						<Pagination className={classes.pagination} count={10} shape="rounded"/>
					</Stack>
				</Box>
			</AdminLayout>
		</>
  )
}
