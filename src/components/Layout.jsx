import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

const Layout = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout