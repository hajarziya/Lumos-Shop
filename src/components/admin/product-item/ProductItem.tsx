import { Button, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import useStyles from './ProductItem.styles'
import EditNoteIcon from '@mui/icons-material/EditNote'
import { IProduct } from '@src/api/interface'
import { DeleteOutline } from '@mui/icons-material'
import { useDeleteProduct } from '@src/api'

interface ProductItemProps {
  product: IProduct
  onDelete: (productId: string) => void
}

export function ProductItem ({ product, onDelete }: ProductItemProps) {
  const { classes } = useStyles()
  const deleteProductMutation = useDeleteProduct()

  const handleDelete = async (productId: string) => {
    try {
      await deleteProductMutation(productId)
      onDelete(productId) // Invoke the onDelete prop passed from the parent component
    } catch (error) {
      console.error('Error deleting product:', error)
    }
  }

  return (
        <>
             <Card className={classes.card} key={product._id}>
                <EditNoteIcon sx={{ margin: '5px' }}/>
                 <Button onClick={() => handleDelete(product._id)}>
                     <DeleteOutline/>
                 </Button>
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
