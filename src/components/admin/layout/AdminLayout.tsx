import { type PropsWithChildren } from 'react'
import { Appbar } from '../appbar'
import { Sidebar } from '../sidebar'

export function AdminLayout ({ children }: PropsWithChildren) {
  return (
		<>
			<div style={{ position: 'fixed', width: '100%', marginTop: '-100px', height: '100vh' }}>
			<Appbar />
			<Sidebar/>
			</div>
			<div style={{ width: '80%', marginLeft: '250px', marginTop: '100px', height: '100vh' }}>
				{children}
			</div>

		</>
  )
}
