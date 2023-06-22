import { Suspense } from 'react' // eslint-disable-line
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from '$Components/Nav/NavBar.jsx'
import Footer from '$Components/Footer/Footer.jsx'
import Home from '$Pages/Home/Home'

export default function AppRoutes () {
    return (
    <Suspense>
        <BrowserRouter>
            <Route exact path={['/', '/about']} component={NavBar} />
                <Routes>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                </Routes>
            <Route exact path={['/', '/about']} component={Footer} />
        </BrowserRouter>
    </Suspense>
    )
}