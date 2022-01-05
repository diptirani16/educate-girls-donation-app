import React from 'react';
import { AppBar, Toolbar } from "@mui/material";
import logo from '../assets/logo.png';

export default function Header() {
    return (
        <>
            <AppBar position="static" sx={{ backgroundColor: "#E0E0E0"}}>
                <Toolbar variant="dense">
                    <img
                        src={logo}
                        alt="logo"
                        loading="lazy"
                    />
                </Toolbar>
            </AppBar>
        </>
    )
}