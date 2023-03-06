import Footer from "../Footer/Footer"
import NavBar from "../NavigationBar/NavBar"

const Layout = ({ children }) => {
    return (
        <div>
            <NavBar />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout