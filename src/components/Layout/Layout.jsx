import Footer from "../Footer/Footer"
import NavBar from "../NavigationBar/Guest/NavBar"

const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout