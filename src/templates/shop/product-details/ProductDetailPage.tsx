import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  Divider,
  Stack,
  Typography
} from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import IconButton from '@mui/material/IconButton'
import useStyles from './ProductDetailPage.styles'
import { AppLayout } from '@src/components/shop'
import { useRouter } from 'next/router'
import { useCartMutation, useProductDetails } from '@src/api'
import { useCallback, useMemo, useState } from 'react'
import { IProduct } from '@src/api/interface'

export function ProductDetailPage () {
  const { classes } = useStyles()
  const router = useRouter()
  const { data } = useProductDetails({ id: router?.query.id as string ?? '' })
  const productDetails = useMemo(() => data?.data.data.product, [data])
  const [quantity, setQuantity] = useState(1)

  const handleIncrement = () => {
    if (productDetails?.quantity && quantity < productDetails?.quantity) {
      setQuantity(quantity + 1)
    }
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const { mutate } = useCartMutation()

  const onAddToCart = useCallback(() => {
    const existingCart: Array<Partial<IProduct>> = JSON.parse(localStorage.getItem('cart') ?? '[]')
    const existingProductIndex = existingCart.findIndex(
      (item) => item._id === productDetails?._id
    )
    if (existingProductIndex !== -1) {
      existingCart[existingProductIndex].quantity = quantity + (existingCart[existingProductIndex]?.quantity ?? 0)
    } else {
      existingCart.push({
        ...productDetails,
        quantity
      })
    }
    localStorage.setItem('cart', JSON.stringify(existingCart))
    router.push('/checkout')
  }, [quantity, productDetails, mutate])

  return (
		<AppLayout>
			<Box className={classes.container}>
				<Card className={classes.imgWrapper}>
					<CardMedia
						component="img"
						height="540"
						image={process.env.NEXT_PUBLIC_BASE_IMAGE_URL + productDetails?.images[0]}
						alt="green iguana"
					/>
				</Card>
				<Box className={classes.textWrapper}>
					<Typography marginTop={'-70px'} fontWeight={'bold'} variant="h3">{productDetails?.name}</Typography>
					<Stack className={classes.priceWrapper}>
					<Typography fontWeight={'bold'} variant="h6">Quantity: {productDetails?.quantity}</Typography>
					<Typography fontWeight={'bold'} variant="h6">Price: ${productDetails?.price}</Typography>
					</Stack>
					<Stack className={classes.likeAndQuantity}>
						<IconButton>
							<FavoriteBorder />
						</IconButton>
						<ButtonGroup size="small" aria-label="quantity selector">
							<Button onClick={handleDecrement}>-</Button>
							<Button>{quantity}</Button>
							<Button onClick={handleIncrement}>+</Button>
						</ButtonGroup>
					</Stack>
					<Divider />
					<Accordion sx={{ backgroundColor: 'transparent' }}>
						<AccordionSummary>
							<Typography component="p" dangerouslySetInnerHTML={{
							  __html: productDetails?.description ?? ''
							}}></Typography></AccordionSummary>
						<AccordionDetails>
						</AccordionDetails>
					</Accordion>
					<Button className={classes.btn} onClick={onAddToCart}>Add To Cart</Button>
				</Box>
			</Box>
		</AppLayout>
  )
}
