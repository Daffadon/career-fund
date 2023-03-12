import NavBarCompany from "../NavigationBar/Company/NavBarCompany"

const LayoutCompany = ({ children }) => {
    return (
        <>
            <NavBarCompany />
            {children}
        </>
    )
}

export default LayoutCompany