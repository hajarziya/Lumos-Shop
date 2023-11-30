import useStyles from './TopBanner.styles'
import { Box } from '@mui/material'
import { theme } from '@src/theme'

export function TopBanners () {
  return (
		<Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2} style={{ height: '610px', margin: '0px 70px' }}>
			<Box gridColumn="span 8" style={{ backgroundColor: theme.palette.primary.main, borderRadius: '15px' }}>
				{/* Content for the first column */}
			</Box>
			<Box gridColumn="span 4" gap={2}
				 style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }}>
				<Box style={{ backgroundColor: theme.palette.secondary.light, height: '300px', borderRadius: '15px' }}>
					{/* Content for the second column, row 1 */}
				</Box>
				<Box style={{ backgroundColor: theme.palette.secondary.dark, height: '300px', borderRadius: '15px' }}>
					{/* Content for the second column, row 2 */}
				</Box>
			</Box>
		</Box>
  )
}
