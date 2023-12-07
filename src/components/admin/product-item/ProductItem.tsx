import { Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import useStyles from './ProductItem.styles'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { IProduct } from '@src/api/interface'

export function ProductItem (product: IProduct) {
  const { classes } = useStyles()

  return (
        <>
             <Card className={classes.card} key={product._id}>
                <EditNoteIcon sx={{ margin: '5px' }}/>
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
