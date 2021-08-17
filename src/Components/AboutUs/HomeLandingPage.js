import React from 'react';
import Tabs from './ThreeTabs';
import { Grid, Typography } from '@material-ui/core';
import Image from '../../Assets/download.jpg';
import { makeStyles } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { createMuiTheme , ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette : {
    primary : 
    {
      main : "#1faf05",
    },
  },
 
})

const useStyle = makeStyles({
    root : {
        width : "100%",
        height : "100%"
    },
    fiftyHeight : {
        height : {
            height : "50%",
            border : "soid black 2px",
        },
    },
    topMargin : {
        marginTop : "10px",
        backgroundColor : "#efefef",
    },
    backgroundColor : {
      backgroundColor : "#efefef"
    },
    fontWeightBold : {
      fontWeight : "bold",
    }
})
const MainData = () =>
{
    const classes = useStyle();
    return(<>
    <ThemeProvider theme = {theme}>
    <Grid container spacing = {2} className = {classes.topMargin} spacing ={4}>
        <Grid item md = {6} xs = {12}>
               <img src = {Image} className = {classes.root}/>
        </Grid>
        <Grid item container md = {6} xs = {12} className = {classes.root}>
            <br/>
              <Grid item xs = {12} className = {classes.fiftyHeight}>
              <Typography variant = "7" align ="left" color ="primary"> 
                   WELCOME TO UNCLE FIXER
                </Typography><br/>
              <Typography variant = "h5" align ="left" className ={classes.fontWeightBold}>
                    We help more then 5 years searving custimers
                </Typography><br/>
                <Typography paragraph justify>
                The component maps the variant prop to a range of different HTML element types.
                 For instance, subtitle1 to If you wish to change that mapping, you can provide your own. 
                 Alternatively, you can use the component prop.
                 The component maps the variant prop to a range of different HTML element types.
                 For instance, subtitle1 to If you wish to change that mapping, you can provide your own. 
                 Alternatively, you can use the component prop.
                </Typography>
              </Grid>
              <Grid item xs = {12}>
                <Tabs/>
              </Grid>
        </Grid>
    </Grid>
    </ThemeProvider>
    </>)
}
export default MainData;