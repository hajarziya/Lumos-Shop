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
import { useProductDetails } from '@src/api'
import { useMemo, useState } from 'react'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
const DynamicQuill = dynamic(() => import('react-quill'), { ssr: false })

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
					<Button className={classes.btn}>Add To Cart</Button>
				</Box>
			</Box>
		</AppLayout>
  )
}
