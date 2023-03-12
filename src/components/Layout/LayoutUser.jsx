import NavBarUser from "../NavigationBar/User/NavBarUser"
import Footer from "../Footer/Footer"

const LayoutUser = ({ children }) => (
    <>
        <NavBarUser />
        {children}
        <Footer />
    </>
)

export default LayoutUser