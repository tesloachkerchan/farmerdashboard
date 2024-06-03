import { useReducer, useEffect } from "react"; 
import AuthReducer from "./AuthReducer"; 
const { createContext } = require("react"); 
 
const INITIAL_STATE = { 
    user: JSON.parse(localStorage.getItem("user")) || null, 
    isFetching: false, 
    error: false 
}; 
 
export const AuthContext = createContext(INITIAL_STATE); 
 
export const AuthContextProvider = ({children}) => { 
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE); 
 
    useEffect(() => { 
        localStorage.setItem("user", JSON.stringify(state.user)); 
    }, [state.user]); 
 
    const logout = () => { 
        dispatch({ type: "LOGOUT" }); 
        localStorage.removeItem("user"); 
    }; 
 
    return ( 
        <AuthContext.Provider 
            value={{ 
                user: state.user, 
                isFetching: state.isFetching, 
                error: state.error, 
                dispatch, 
                logout // Provide the logout function 
            }} 
        > 
            {children} 
        </AuthContext.Provider> 
    ); 
};