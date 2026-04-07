import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import BackToTopArrow from "../components/BackToTopArrow"

export default function Layout () {
    const { pathname, state } = useLocation()

    const transitionClass =
        state?.slideDirection === "from-right"
            ? "routeSlideFromRight"
            : state?.slideDirection === "from-left"
                ? "routeSlideFromLeft"
                : ""

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return(
        <>
        <header>
            <NavBar />
        </header>

        <main className={transitionClass}>
            <Outlet />
        </main>
        
        <footer>
            <Footer />
        </footer>

        <BackToTopArrow />
        </>
    )
}