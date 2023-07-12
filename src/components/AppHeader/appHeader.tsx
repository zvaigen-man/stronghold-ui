import { useState, MouseEvent, FC } from 'react';
import './appHeader.scss';
import { IconButton, AppBar, Box, Toolbar, MenuItem, Menu } from '@mui/material';
import { ReactComponent as AttIcon } from './../../assets/AttLogo.svg';


import { headerConstants } from '../../utils/texts'
import { getInitials } from '../../utils';

export const AppHeader: FC = () => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isProfileMenuOpen = Boolean(anchorEl);


    const userInitials = 'SS'



    const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
    };


    const menuId = 'primary-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isProfileMenuOpen}
            onClose={handleMenuClose}
        >

            <MenuItem >{headerConstants.logout}</MenuItem>
        </Menu>
    );

    return (
        <>
            <Box className="header-wrapper">
                <AppBar position="static">
                    <Toolbar className="header-content">

                        
                        <img width="100px" height="100px" src="/logo.png" alt="" />
                        <span className="app-title">{headerConstants.app_title}</span>

                    </Toolbar>
                </AppBar>
                {renderMenu}
            </Box>
        </ >
    );
};

export default AppHeader;