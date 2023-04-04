import { NavLink } from 'react-router-dom'

import { Container, Button, Nav, Navbar as NavbarBs } from 'react-bootstrap'

import { useShoppingCart } from '../context/ShoppingCartContext'

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()

    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3'>
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to='/' as={NavLink}>
                        Home
                    </Nav.Link>
                    <Nav.Link to='/store' as={NavLink}>
                        Store
                    </Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                {cartQuantity > 0 && (
                    <Button
                        onClick={openCart}
                        style={{
                            width: '3rem',
                            height: '3rem',
                            position: 'relative',
                        }}
                        variant='outline-primary'
                        className='rounded-circle'
                    >
                        <svg
                            fill='currentColor'
                            viewBox='0 0 56 56'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <g id='SVGRepo_iconCarrier'>
                                <path d='M .9532 6.7188 C .9532 7.6797 1.7501 8.5000 2.6876 8.5000 L 10.6094 8.5000 L 14.3594 34.2344 C 14.8516 37.5625 16.6094 39.6485 20.0079 39.6485 L 47.3596 39.6485 C 48.2735 39.6485 49.0703 38.8985 49.0703 37.8907 C 49.0703 36.8829 48.2735 36.1328 47.3596 36.1328 L 20.4063 36.1328 C 19.0704 36.1328 18.2501 35.1953 18.0391 33.7656 L 17.6641 31.3047 L 47.4062 31.3047 C 50.8281 31.3047 52.5859 29.1953 53.0783 25.8438 L 54.9532 13.4453 C 55.0003 13.1407 55.0468 12.7656 55.0468 12.5547 C 55.0468 11.4297 54.2030 10.6563 52.9142 10.6563 L 14.6641 10.6563 L 14.1954 7.6797 C 13.9610 5.8750 13.3048 4.9609 10.9141 4.9609 L 2.6876 4.9609 C 1.7501 4.9609 .9532 5.7813 .9532 6.7188 Z M 18.0391 47.2422 C 18.0391 49.375 19.7266 51.0391 21.8594 51.0391 C 23.9688 51.0391 25.6563 49.375 25.6563 47.2422 C 25.6563 45.1328 23.9688 43.4453 21.8594 43.4453 C 19.7266 43.4453 18.0391 45.1328 18.0391 47.2422 Z M 39.9532 47.2422 C 39.9532 49.375 41.6641 51.0391 43.7735 51.0391 C 45.9062 51.0391 47.5939 49.375 47.5939 47.2422 C 47.5939 45.1328 45.9062 43.4453 43.7735 43.4453 C 41.6641 43.4453 39.9532 45.1328 39.9532 47.2422 Z' />
                            </g>
                        </svg>
                        <div
                            className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                            style={{
                                color: '#ffffff',
                                width: '1.5rem',
                                height: '1.5rem',
                                position: 'absolute',
                                bottom: 0,
                                right: 0,
                                transform: 'translate(25%, 25%)',
                            }}
                        >
                            {cartQuantity}
                        </div>
                    </Button>
                )}
            </Container>
        </NavbarBs>
    )
}
