import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

export default function Layout () {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return(
        <>
        <header>
            <NavBar />
        </header>

        <main>
            <Outlet />
        </main>
        
        <footer>
            <Footer />
        </footer>
        </>
    )
}