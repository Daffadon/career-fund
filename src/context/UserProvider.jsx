import { createContext, useEffect, useState } from "react";
import { isAuthenticated } from "../authentication/AuthService";

const userContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState("");
    useEffect(() => {
        if (!isAuthenticated(token)) {
            setToken("")
            localStorage.setItem('token', '');
        }
    })
    return (
        <userContext.Provider value={[token, setToken]}>
            {children}
        </userContext.Provider>
    )
}

export default userContext;