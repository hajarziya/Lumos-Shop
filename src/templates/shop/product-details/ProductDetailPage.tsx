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
  Rating,
  Stack,
  Typography
} from '@mui/material'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import IconButton from '@mui/material/IconButton'
import useStyles from './ProductDetailPage.styles'
import { AppLayout } from '@src/components/shop'

export function ProductDetailPage () {
  const { classes } = useStyles()
  return (
		<AppLayout>
			<Box className={classes.container}>
				<Card className={classes.imgWrapper}>
					<CardMedia
						component="img"
						height="140"
						image="/images/trees.webp"
						alt="green iguana"
					/>
				</Card>
				<Box>
					<Typography variant="h2">Abbigale 65.8 Faux Leather Convertible Sofa</Typography>
					<Rating name="read-only" readOnly/>
					<Typography variant="h2">$172.99</Typography>
					<Typography variant="h2">On Sale</Typography>
					<Box>
						<Typography>Select Fabric:</Typography>
						<Button>
							<CardMedia
								component="img"
								height="140"
								image="/images/trees.webp"
								alt="green iguana"
							/>
							<Typography>Black Faux Leather</Typography>
						</Button>
						<Button>
							<CardMedia
								component="img"
								height="140"
								image="/images/trees.webp"
								alt="green iguana"
							/>
							<Typography>Blue Faux Leather</Typography>
						</Button>
						<Button>
							<CardMedia
								component="img"
								height="140"
								image="/images/trees.webp"
								alt="green iguana"
							/>
							<Typography>Brown Faux Leather</Typography>
						</Button>
						<Button>
							<CardMedia
								component="img"
								height="140"
								image="/images/trees.webp"
								alt="green iguana"
							/>
							<Typography>Green Faux Leather</Typography>
						</Button>
					</Box>
					<Stack spacing={2} alignItems="center">
						<ButtonGroup size="small" aria-label="quantity selector">
							<Button>-</Button>
							<Button>1</Button>
							<Button>+</Button>
						</ButtonGroup>
						<IconButton>
							<FavoriteBorder/>
						</IconButton>
						<Button>Add To Cart</Button>
					</Stack>
					<Divider/>
					<Accordion>
						<AccordionSummary>Description</AccordionSummary>
						<AccordionDetails>
							<Typography>
								The backrest of this versatile sofa is adjustable at three angles, allowing you to
								switch between the sofa and the bed at will, allowing you to enjoy a family
								conversation,
								watch
								a long-awaited sporting event or movie, or enjoy a restful night's sleep! The design of
								the
								sleeper sofa is stylish, neutral tones can be blended with any style, high-quality
								artificial
								leather to feel good and shiny chrome legs, exudes a low-key yet modern charm. This sofa
								bed
								is
								ideal for small Spaces such as apartment loft, studio, etc., efficient use of limited
								space,
								to
								enjoy life.
								What's Included?
								Toss Pillow
								Features
								[Adjustable Back] : This multi-functional sofa uses a folding device and three backrest
								Settings
								to meet your different needs.
								[Foldable Cup Holder] : There are two cup holders in the middle of the couch, which can
								be
								turned up to form a plane when not in use.
								[Strong structure] :This sofa bed is supported by 4 chrome-plated metal legs, which is
								strong,
								stable and durable.
								[Movable Armrests] : Two foam filled side armrests can be freely placed as small pillows
								or
								lower back supports.
								[Easy assembly ]: We provide you with all the tools you need to assemble your new sofa,
								so
								that
								you can assemble it quickly.
							</Typography>

						</AccordionDetails>
					</Accordion>

				</Box>

			</Box>
		</AppLayout>
  )
}
