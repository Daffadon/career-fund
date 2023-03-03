import NavBar from "../NavigationBar/NavBar"

const Layout = ({ children }) => {
    return (
        <div className="min-h[100vh]">
            <NavBar />
            {children}
        </div>
    )
}

export default Layout