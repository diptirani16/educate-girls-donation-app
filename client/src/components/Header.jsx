import React from 'react';
import { AppBar, Toolbar } from "@mui/material";
import logo from '../assets/logo.png';
import DonateUs from './DonateUs';

export default function Header() {
    return (
        <>
            <AppBar position="fixed" sx={{ backgroundColor: "#E0E0E0"}}>
                <Toolbar variant="dense" sx={{display: "flex", justifyContent: "space-between"}}>
                    <img
                        src={logo}
                        alt="logo"
                        loading="lazy"
                    />
                    <DonateUs />
                </Toolbar>
            </AppBar>
        </>
    )
}
