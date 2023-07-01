import { React, useState } from 'react'
import Link from 'next/link'
import RequestForm from './RequestForm'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import { pink } from '@mui/material/colors';



export default function Navbar() {
    const [showRequestForm, setShowRequestForm] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const StyledAppBar = styled(AppBar)({
        backgroundColor: 'transparent',
        boxShadow: 'none',
    });

    const MobileNavbarImg = styled('img')({
        marginRight: 8,
        height: 80
    });

    const handleOpenRequestForm = () => {
        setShowRequestForm(true)
    }

    const handleCloseRequestForm = () => {
        setShowRequestForm(false)
    }

    const toggleDrawer = (open) => (event) => {
        setIsDrawerOpen(open);
    };

    const drawerList = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Hem', 'Våra föreläsare', 'Om oss'].map((text, index) => (
                    <Link key={text} href={["/", "/forelasare", "/about"][index]}>
                        <ListItem button className='nav-link-mobile'>
                            <ListItemText primary={text} primaryTypographyProps={{ style: { fontFamily: 'Roboto', fontWeight: 900, fontStyle: 'italic', fontSize: 30, color: '#F16876' } }} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </Box>
    );


    return (
        <>
            {/*Desktop navbar*/}
            <nav className='hide-on-mobile'>
                <div className='navbar-logo'>
                    <img src='snackare_logga.png' className='navbar-img' />
                    <div className='logo-text'>
                        <div className='square-logo-header'>
                            <h1>Snackare</h1>
                            <div className='square-logo'>
                                <div className='diagonal'></div>
                            </div>
                        </div>
                        <h2>Ett nytänkande talarnätverk</h2>
                    </div>
                </div>
                <ul className='navbar-links'>
                    <li className='nav-link'><Link href='/'>Hem</Link></li>
                    <li className='nav-link'><Link href='/forelasare'>Föreläsare</Link></li>
                    <li className='nav-link'><Link href='/about'>Om oss</Link></li>
                    <button className='contact-us-button hide-on-mobile' onClick={handleOpenRequestForm}>Kontakta oss</button>
                    {showRequestForm && <RequestForm handleCloseRequestForm={handleCloseRequestForm} />}
                </ul>

            </nav >

            {/* Mobile Navbar */}
            <div className='hide-on-desktop'>
                <StyledAppBar position="static" className='mobile-navbar'>
                    <Toolbar sx={{ justifyContent: 'space-between' }}>
                        <MobileNavbarImg src='snackare_logga.png' />
                        <IconButton
                            edge="start"
                            color="default"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon className='menu-icon' MenuIcon style={{ fontSize: '3rem', color: '#273B7B' }} />
                        </IconButton>
                    </Toolbar>
                </StyledAppBar>
                <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                    {drawerList}
                </Drawer>
            </div>
        </>
    )
}
