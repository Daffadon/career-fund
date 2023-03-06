import Footer from "../Footer/Footer"
import NavBar from "../NavigationBar/NavBar"

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