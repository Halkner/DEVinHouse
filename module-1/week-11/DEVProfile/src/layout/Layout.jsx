import { useTheme } from '../hooks/useTheme';
import { ThemeProvider } from 'styled-components'
import { Navbar } from '../components/Navbar/Navbar';
import PropTypes from 'prop-types';
import { UserContextProvider } from '../context/UsersContext/UserContextProvider';
import { ListaCards } from '../components/ListaCards/ListaCards';
import { GlobalStyles } from '../themes/GlobalStyles'

export const Layout = () => {
    const {theme} = useTheme();

    return(
        <ThemeProvider theme={theme}>
            <UserContextProvider>
                <GlobalStyles/>
                <Navbar/>
                <ListaCards/>
            </UserContextProvider>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}