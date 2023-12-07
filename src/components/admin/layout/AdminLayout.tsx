import { type PropsWithChildren } from 'react'
import { Appbar } from '../appbar'
import { Sidebar } from '../sidebar'

export function AdminLayout ({ children }: PropsWithChildren) {
  return (
		<>
			<Appbar/>
			<Sidebar/>
			<div style={{ width: '80%', marginLeft: '250px', marginTop: '50px', height: '100vh', marginBottom: '50px' }}>
				{children}
			</div>
		</>
  )
}
