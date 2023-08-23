import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu  = (event) => { setAnchorElUser(event.currentTarget) };
    const handleCloseUserMenu = () => { setAnchorElUser(null) };

    const headerHeight = '8vh';

    return (
        <AppBar position="static">
            <Container 
                sx={{ 
                    maxHeight: headerHeight, 
                    display: 'flex',
                    alignItems:'center'
                }}
            >
                
                <SettingsEthernetIcon/>
                
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', margin:'0px 20px' } }}>
                    {pages.map((page) => (
                        <Button key={page} sx={{ color: 'white', display: 'block' }}>
                            {page}
                        </Button>
                    ))}
                </Box>

                <Box>
                    <IconButton sx={{ maxHeight:"98%" }}>
                        <Avatar 
                            sx={{ height:"5vh", width:"5vh" }}
                            onClick={handleOpenUserMenu} 
                            src="/static/images/avatar/2.jpg" 
                        />
                    </IconButton>
                    {/* <Menu
                        sx={{ mt: '6vh' }}
                        anchorEl={ anchorElUser }
                        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                        open={ Boolean(anchorElUser) }
                        onClose={ handleCloseUserMenu }
                        keepMounted
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu> */}
                </Box> 
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
