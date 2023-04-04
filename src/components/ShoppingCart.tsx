import { useShoppingCart } from '../context/ShoppingCartContext'

import { Offcanvas } from 'react-bootstrap'

type Props = {
    isOpen: boolean
}

export const ShoppingCart = ({ isOpen }: Props) => {
    const { closeCart } = useShoppingCart()

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
        </Offcanvas>
    )
}
