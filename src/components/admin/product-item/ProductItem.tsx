import { Button, Card, CardContent, CardMedia, Divider, Popover, Stack, Typography } from '@mui/material'
import useStyles from './ProductItem.styles'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { IProduct } from '@src/api/interface'
import { useDeleteProductMutation } from '@src/api'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import React from 'react'
import { DeleteOutline } from '@mui/icons-material'

interface ProductItemProps {
  onRefresh: () => void
  onEdit: () => void
  product: IProduct
}
export function ProductItem ({ onRefresh, product, onEdit }: ProductItemProps) {
  const { classes } = useStyles()

  const { mutate } = useDeleteProductMutation(product._id, { onSuccess: () => { onRefresh() } })
  const handleDelete = () => {
    mutate(product._id)
  }
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
            <Card className={classes.card} key={product._id}>
                <Button aria-describedby={id} variant="contained" onClick={handleClick}><MoreVertIcon/></Button>
                <Popover
                    // className={classes.popver}
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left'
                    }}
                >
                    <Stack gap={1} p={1}>
                        <Button onClick={handleDelete} startIcon={<DeleteOutline/>}>delete</Button>
                        <Button onClick={onEdit} startIcon={<EditNoteIcon sx={{ margin: '5px' }}/>}>Edit</Button>
                    </Stack>
                </Popover>
                <CardMedia
                    component="img"
                    height="194"
                    image={process.env.NEXT_PUBLIC_BASE_IMAGE_URL + product.images[0]}
                    alt="Paella dish"
                    className={classes.img}
                />
                <Divider sx={{ marginInline: '15px' }}/>
                <CardContent>
                    <Typography sx={{ lineHeight: '50px' }} fontWeight={'bold'} variant={'h6'}>{product.brand}</Typography>
                    <Typography>{product.name}</Typography>
                    <Typography sx={{ lineHeight: '50px' }} color={'gray'}>{product.quantity}</Typography>
                    <Typography fontWeight={'bold'} variant={'h5'}>${product.price}</Typography>
                </CardContent>

            </Card>

        </>
  )
}
