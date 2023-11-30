import { type PropsWithChildren } from 'react'
import { Appbar } from '../appbar'
import { CategoriesSection } from '@src/templates/shop/home/sections/CategoriesSection'

export function AppLayout ({ children }: PropsWithChildren) {
  return <>
        <Appbar/>
        <CategoriesSection/>
        {children}
    </>
}
