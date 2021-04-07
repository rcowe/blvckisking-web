import React from 'react';
import {makeStyles} from "@material-ui/core";
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import CardsEvents from '../reuse/Cards-Events';
import Carousel from "../Carousel";

const styles = {
    paper: {
        padding: "2vw",
        textAlign: "center",
        color: "#000000",
        whiteSpace: "nowrap",
        background: "#A0DB9E",
        marginTop: "2vh",
        marginBottom: "2vh"
    }
};

const useStyles = makeStyles(styles);

export default function Home () {
    const classes = useStyles();
    return (
        <>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Carousel />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    Pre-Slavery 3100 BC - 1600
                    <CardsEvents />
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    Time in Chains 1601 - 1865
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    Re-Constructing Black History 1865 - 1877
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>1878 - 1960</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>Black Civil Rights 1960 - 1968</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>Black Culture 1969 - 1989</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>Black ... 1990 - 2000</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>Black ... 2001 - 2010</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>Black ... 2011 - 2020</Paper>
            </Grid>

        </Grid>
        </>
    )

}