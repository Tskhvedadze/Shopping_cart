import { ReactNode, createContext, useContext, useState } from 'react'

import { ShoppingCart } from '../components/ShoppingCart'

import { useLocalStorage } from '../hooks/useLocaleStorage'

type ShoppingCartProviderProps = {
    children: ReactNode
}

type CartItem = {
    id: number
    quantity: number
}

type ShoppingCartContextProps = {
    openCart: () => void
    closeCart: () => void
    getItemQuantity: (id: number) => number
    increaseCartQuantity: (id: number) => void
    decreaseCartQuantity: (id: number) => void
    removeFromCart: (id: number) => void
    cartQuantity: number
    cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
        'shopping-cart',
        [],
    )

    const cartQuantity = cartItems.reduce(
        (quantity, item) => item.quantity + quantity,
        0,
    )

    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)

    const getItemQuantity = (id: number) => {
        return cartItems.find((item) => item.id == id)?.quantity || 0
    }
    const increaseCartQuantity = (id: number) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id == id) == null) {
                return [...currItems, { id, quantity: 1 }]
            } else {
                return currItems.map((item) => {
                    if (item.id == id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    const decreaseCartQuantity = (id: number) => {
        setCartItems((currItems) => {
            if (currItems.find((item) => item.id == id)?.quantity == 1) {
                return currItems.filter((item) => item.id !== id)
            } else {
                return currItems.map((item) => {
                    if (item.id == id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    const removeFromCart = (id: number) => {
        setCartItems((currItems) => {
            return currItems.filter((item) => item.id !== id)
        })
    }

    const values = {
        isOpen,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
    }

    return (
        <ShoppingCartContext.Provider value={values}>
            {children}
            <ShoppingCart isOpen={isOpen} />
        </ShoppingCartContext.Provider>
    )
}
