import { useState } from 'react';
import Switch from 'react-switch';
import { useTheme } from '../../hooks/useTheme';
import { Container } from './styles';

export const Navbar = () => {

    const {changeTheme, theme} = useTheme();

    const [switchState, setSwitchState] = useState(false);

    const toggleSwitch = () => {
        setSwitchState(!switchState)
        changeTheme();
    }

    return(

        <Container>
                <div className='logo-container'>
                    <img src="https://devinhouse.tech/wp-content/uploads/sites/2/2021/12/logo-dev-in-01.png" alt="Logo" />
                </div>

                <div className='title-container'>
                    <h1>DEV Profile</h1>
                </div>

                <div className='switch-container'>
                    <img src="https://cdn-icons-png.flaticon.com/512/1812/1812717.png" alt="moon icon" />

                    <Switch
                    onChange={() => toggleSwitch()} 
                    checked={switchState} 
                    uncheckedIcon={false} 
                    checkedIcon={false}
                    onColor={theme.colors.primaryColor}
                    offColor={theme.colors.primaryColor}
                    offHandleColor={theme.colors.secondaryColor}
                    onHandleColor={theme.colors.secondaryColor}
                    activeBoxShadow={null}
                    handleDiameter={22}
                    className="switch"
                    />

                    <img src="https://cdn-icons-png.flaticon.com/512/606/606795.png" alt="sun icon" />
                </div>
        </Container>
    )
}