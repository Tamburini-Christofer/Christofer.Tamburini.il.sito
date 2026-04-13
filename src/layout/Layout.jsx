import { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import BackToTopArrow from "../components/BackToTopArrow"

export default function Layout () {
    const { pathname, state } = useLocation()
    const pageThemeClass =
        pathname === "/"
            ? "theme-home"
            : pathname.startsWith("/web-developer")
                ? "theme-web"
                : pathname.startsWith("/fotografia")
                    ? "theme-fotografia"
                    : pathname.startsWith("/video-droni")
                        ? "theme-video"
                        : pathname.startsWith("/stampa3D")
                            ? "theme-stampa"
                            : "theme-home"

    const transitionClass =
        state?.slideDirection === "from-right"
            ? "routeSlideFromRight"
            : state?.slideDirection === "from-left"
                ? "routeSlideFromLeft"
                : ""

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    useEffect(() => {
        const pageThemeClasses = [
            "theme-home",
            "theme-web",
            "theme-fotografia",
            "theme-video",
            "theme-stampa",
        ]

        document.body.classList.remove(...pageThemeClasses)
        document.body.classList.add(pageThemeClass)

        return () => {
            document.body.classList.remove(pageThemeClass)
        }
    }, [pageThemeClass])

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