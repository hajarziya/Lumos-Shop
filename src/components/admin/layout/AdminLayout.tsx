import { type PropsWithChildren } from 'react'
import { Appbar } from '@src/components/appbar/Appbar'
import { Sidebar } from '@src/components/sidebar/Sidebar'

export function AdminLayout ({ children }: PropsWithChildren) {
  return (
		<>
			<Appbar/>
			<Sidebar/>
			<div style={{ width: '80%', marginLeft: '250px', marginTop: '50px', height: '100vh' }}>
				{children}
			</div>
		</>
  )
}
