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
import React, { useMemo, useState } from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { useCategories } from '@src/api'
import moment from 'moment'

export function CategoriesPage () {
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

  const { data } = useCategories({ page })
  const categories = useMemo(() => data?.data.data.categories ?? [], [data])

  return (
        <AdminLayout>
            <Typography fontWeight={'bold'} variant={'h5'}
                        sx={{ marginLeft: '120px', marginBottom: '20px' }}>Categories</Typography>
            <Box className={classes.container}>
                <Table className={classes.tableWrapper}>
                    <TableHead >
                        <TableRow >
                            <TableCell sx={{ fontWeight: 'bold' }} >Title</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Created At</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }}>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map(category => <TableRow key={category._id}>
                            <TableCell>{category.name}</TableCell>
                            <TableCell>{moment(category.createdAt).format('DD/MM/YYYY HH:mm')}</TableCell>
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
                                onChange={(_, _page) => { setPage(_page) }}/>
                </Stack>
            </Box>
        </AdminLayout>
  )
}
