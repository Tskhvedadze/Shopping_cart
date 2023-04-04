import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'

import { Navbar } from './components/Navbar'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Store = lazy(() => import('./pages/Store'))

function App() {
    return (
        <>
            <Navbar />
            <Container className='mb-4'>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route index element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/store' element={<Store />} />
                    </Routes>
                </Suspense>
            </Container>
        </>
    )
}

export default App
