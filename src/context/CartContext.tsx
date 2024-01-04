import { PropsWithChildren, createContext, useState, useContext, useCallback, useEffect } from 'react'
import { IProduct } from '@src/api/interface'

export interface CartContextType {
  cart: Array<Partial<IProduct>>
  updateCart: (cart: Array<Partial<IProduct>>) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider ({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<CartContextType['cart']>([])

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') ?? '[]')
    setCart(cart)
  }, [])

  const updateCart = useCallback((_cart: CartContextType['cart']) => {
    console.log({ _cart })
    setCart(_cart)
    if (_cart.length === 0) {
      localStorage.removeItem('cart')
    } else {
      localStorage.setItem('cart', JSON.stringify(_cart))
    }
  }, [])

  return <CartContext.Provider value={{ cart, updateCart }}>{children}</CartContext.Provider>
}

export function useCartContext () {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCartContext must be used inside the CartProvider')
  }

  return context
}
