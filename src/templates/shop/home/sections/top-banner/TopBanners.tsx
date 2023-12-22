import useStyles from './TopBanner.styles'
import { Box, CardMedia } from '@mui/material'
import { theme } from '@src/theme'
import Image from 'next/image'

export function TopBanners () {
  return (
		<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} style={{ height: '610px', margin: '0px 70px' }}>
			<Box gridColumn="span 8" style={{ borderRadius: '15px' }}>
				<CardMedia style={{ height: '612px', borderRadius: '15px', width: '100%' }} image='/images/banner-3.webp'>
				</CardMedia>
			</Box>
			<Box gridColumn="span 4" gap={2}
				 style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }}>
				<Box style={{ height: '300px', borderRadius: '15px', width: '100%' }} >
					<Image src="/images/banner-small(1).webp" alt="banner" width="100" height="300" objectFit="center" style={{ borderRadius: '15px', width: '100%' }} />
				</Box>
				<Box style={{ height: '300px', borderRadius: '15px', width: '100%' }}>
					<Image src="/images/banner-2 (1).webp" alt="banner" width="100" height="300" objectFit="center" style={{ borderRadius: '15px', width: '100%' }} />
				</Box>
			</Box>
		</Box>
  )
}
