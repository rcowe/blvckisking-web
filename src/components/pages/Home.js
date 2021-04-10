import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CardsEvents from '../reuse/Cards-Events';
import CardsPeople from '../reuse/Cards-People';
import Carousel from "../Carousel-Home";
import Typography from '@material-ui/core/Typography';
import PeopleShow from "./PeopleShow";
const styles = {
    paper: {
        padding: "2vw",
        textAlign: "center",
        color: "#000000",
        whiteSpace: "nowrap",
        marginTop: "2vh",
        marginBottom: "2vh",
        background: "linear-gradient(45deg, #c33764 30%, #1d2671 90%)",
    },
    theme1: {
        background: 'linear-gradient(45deg, #3a1c71 30%, #d76d77 90%, #ffaf7b 20%)'
    }
};


const useStyles = makeStyles(styles);

export default function Home () {
    const classes = useStyles();

    return (
        <>
        <Grid container spacing={2} className={classes.theme1}>
            <Grid item xs={12}>
                <Paper className={classes.paper} >
                    <Carousel />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    {/*<Typography variant="h5" component="h1">*/}
                    {/*    Pre-Slavery 3100 BC - 1600*/}
                    {/*</Typography>*/}
                    <CardsEvents />
                    <CardsPeople />
                </Paper>
            </Grid>
        </Grid>
        </>
    )

}