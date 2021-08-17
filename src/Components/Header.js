import React from 'react';
import {AppBar , Toolbar, Typography, Button, IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyle = makeStyles({
    root : {flex : 1}
})
const Header = () =>
{
    const classes = useStyle();
    return(
        <>
        <AppBar position = "static">
           <Toolbar>
            <Typography className = {classes.root}>
                Thia Ia Our Header
            </Typography>
            <AccountCircleIcon/>
           </Toolbar>
        </AppBar>
        </>
    )
}
export default Header;