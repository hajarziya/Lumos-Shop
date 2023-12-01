import React from 'react'
import { Box, Button, SwipeableDrawer, Typography } from '@mui/material'
import Link from 'next/link'

interface DrawerCartProps {
  open: boolean
  onClose: () => void
}

export function DrawerCart ({ open, onClose }: DrawerCartProps) {
  return (
		<SwipeableDrawer anchor="right" open={open} onClose={onClose} onOpen={() => {
		}}>
			<Box p={2} style={{ width: '300px' }}>
				<Typography variant="h6">Your Cart</Typography>
				<Link href="/checkout" passHref>
					<Button>Check Out</Button>
				</Link>
			</Box>
		</SwipeableDrawer>
  )
}
