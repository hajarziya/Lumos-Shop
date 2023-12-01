import useStyles from './Sidebar.styles'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import CategoryIcon from '@mui/icons-material/Category'
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded'
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded'
import React, { useCallback } from 'react'
import { useRouter } from 'next/router'

export function Sidebar () {
  const { classes } = useStyles()
  const { push } = useRouter()

  const onMenuClick = useCallback((route: string) => {
    push('/admin' + route)
  }, [])

  return (
		<Box className={classes.drawerWrapper}>
			<List className={classes.list}>
				<ListItem disablePadding>
					<ListItemButton onClick={() => { onMenuClick('/orders') }}>
						<ListItemIcon>
							<ShoppingBagIcon/>
						</ListItemIcon>
						<ListItemText primary="Orders"/>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => { onMenuClick('/users') }}>
						<ListItemIcon>
							<GroupAddIcon/>
						</ListItemIcon>
						<ListItemText primary="Users"/>
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton onClick={() => { onMenuClick('/products') }}>
						<ListItemIcon>
							<CategoryIcon/>
						</ListItemIcon>
						<ListItemText primary="Products"/>
					</ListItemButton>
				</ListItem>

				<ListItem disablePadding>
					<ListItemButton onClick={() => { onMenuClick('/categories') }}>
						<ListItemIcon>
							<FormatListBulletedRoundedIcon/>
						</ListItemIcon>
						<ListItemText primary="Categories"/>
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton onClick={() => { onMenuClick('/sub-categories') }}>
						<ListItemIcon>
							<ListAltRoundedIcon/>
						</ListItemIcon>
						<ListItemText primary="Sub Categories"/>
					</ListItemButton>
				</ListItem>
			</List>
		</Box>
  )
}
