import NavBarCompany from "../NavigationBar/NavBarCompany"

const LayoutCompany = ({ children }) => {
    return (
        <>
            <NavBarCompany />
            {children}
        </>
    )
}

export default LayoutCompany