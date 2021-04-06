import React from 'react';
import {makeStyles} from "@material-ui/core";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Card from '../reuse/Cards';
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
                <Paper className={classes.paper}>TBD</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>TBD</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>TBD</Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>TBD</Paper>
            </Grid>
        </Grid>
        </>
    )

}

// export default function Home() {
//     return (
//         <Grid container>
//             <Grid item xs={12}>
//                 <h1 style={{ backgroundColor: '#cfe8fc'}}>
//                     This is a project to raise awareness. <br />
//                     To make you aware. <br />
//                     Aware that Black Is King.
//                 </h1>
//             </Grid>
//
//             <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
//                 <h1>
//                     Pre-Slavery 3100 BC - 1600
//                 </h1>
//                 <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
//                    <Card />
//                 </Container>
//             </Grid>
//
//             <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
//                 <h1>
//                     Time in Chains 1601 - 1865
//                 </h1>
//                 <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
//                     Test
//                 </Container>
//             </Grid>
//
//             <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
//                 <h1>
//                     Constructing Black History 1865 - 1960
//                 </h1>
//                 <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
//                     Test
//                 </Container>
//             </Grid>
//
//             <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
//                 <h1>
//                      Black Civil Rights 1960 - 1968
//                 </h1>
//                 <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
//                     Test
//                 </Container>
//             </Grid>
//
//             <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
//                 <h1>
//                     Black Culture 1969 - 1989
//                 </h1>
//                 <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
//                     Test
//                 </Container>
//             </Grid>
//
//             <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
//                 <h1>
//                     Black ... 1990 - 2000
//                 </h1>
//                 <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
//                     Test
//                 </Container>
//             </Grid>
//
//             <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
//                 <h1>
//                     Black ... 2001 - 2010
//                 </h1>
//                 <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
//                     Test
//                 </Container>
//             </Grid>
//
//             <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
//                 <h1>
//                     Black ... 2011 - 2020
//                 </h1>
//                 <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
//                     Test
//                 </Container>
//             </Grid>
//
//         </Grid>
//     )
// }
