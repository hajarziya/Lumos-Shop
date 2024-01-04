import { type PropsWithChildren } from 'react'
import { Appbar } from '../appbar'
import { Sidebar } from '../sidebar'
import { Box } from '@mui/material'

export function AdminLayout ({ children }: PropsWithChildren) {
  return (
        <>
			<Appbar/>
			<Sidebar/>
            <Box sx={{ ml: '240px', pt: '100px', mr: '24px' }} >
                {children}
            </Box>

        </>
  )
}
