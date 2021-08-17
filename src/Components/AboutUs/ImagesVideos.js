import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Image from '../../Assets/Dummy.png';
import { Button } from '@material-ui/core';
import useStyles from './style';
const ImagesVideos = () =>
{
    const classes = useStyles();
    return(
    <>
    <Grid container spacing = {1} className = {classes.background}>
        <Grid xs = {12}>
            <Typography align = "center" variant = "h5" className = {classes.alignCenter}>
                Images/Videos Gallery
            </Typography>
        </Grid>
        <Grid item xs = {12} sm = {6}>
            <img src = {Image} className = {classes.size}/>
        </Grid>
        <Grid item xs = {12} sm = {6}>
        <img src = {Image} className = {classes.size} />
        </Grid>
        <Grid item xs = {12} sm = {6}>
        <img src = {Image} className = {classes.size} />
        </Grid>
        <Grid item xs = {12} sm = {6}>
        <img src = {Image} className = {classes.size} />
        </Grid>
        <Grid item xs = {12} sm = {6}>
        <img src = {Image} className = {classes.size} />
        </Grid>
        <Grid item xs = {12} sm = {6}>
        <img src = {Image} className = {classes.size} />
        </Grid>
    </Grid>
        <Grid container className = {classes.buttonAlignment}>
       <Button color = "primary" variant = "contained" className = {classes.textWhite}>See More</Button>
       </Grid>
    </>
    )
}
export default ImagesVideos;