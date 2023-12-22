import React from 'react'
import useStyles from './ProductItem.styles'
import { ButtonBase, Card, CardMedia, Stack, Typography } from '@mui/material'
import { IProduct } from '@src/api/interface'

export function ProductItem (product: IProduct) {
  const { classes } = useStyles()
  return <ButtonBase href={`/product/${product._id}`}>
        <Card className={classes.card}>
            <CardMedia
                component="img"
                alt="tree"
                height="330"
                image={process.env.NEXT_PUBLIC_BASE_IMAGE_URL + product?.images[0]}
            />
            <Stack direction="row" justifyContent="space-between" m={2}>
                <Typography>{product.name}</Typography>
                <Typography>${product.price}</Typography>
            </Stack>
        </Card>
    </ButtonBase>
}
