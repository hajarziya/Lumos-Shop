import { type PropsWithChildren } from 'react'
import { Appbar } from '../appbar'

export function AppLayout ({ children }: PropsWithChildren) {
  return <>
		<Appbar/>
		{children}
	</>
}
