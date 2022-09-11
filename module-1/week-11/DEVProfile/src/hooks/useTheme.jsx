import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext/ThemeContext"

export const useTheme = () => {
    const context = useContext(ThemeContext);
    
    return context;
}