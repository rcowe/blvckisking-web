import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Card from '../reuse/Cards';

export default function Home() {
    return (
        <Grid container>
            <Grid item xs={12}>
                <h1 style={{ backgroundColor: '#cfe8fc'}}>
                    This is a project to raise awareness. <br />
                    To make you aware. <br />
                    Aware that Black Is King.
                </h1>
            </Grid>

            <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
                <h1>
                    Pre-Slavery 3100 BC - 1600
                </h1>
                <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
                   <Card />
                </Container>
            </Grid>

            <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
                <h1>
                    Time in Chains 1601 - 1865
                </h1>
                <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
                    Test
                </Container>
            </Grid>

            <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
                <h1>
                    Constructing Black History 1865 - 1960
                </h1>
                <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
                    Test
                </Container>
            </Grid>

            <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
                <h1>
                     Black Civil Rights 1960 - 1968
                </h1>
                <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
                    Test
                </Container>
            </Grid>

            <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
                <h1>
                    Black Culture 1969 - 1989
                </h1>
                <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
                    Test
                </Container>
            </Grid>

            <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
                <h1>
                    Black ... 1990 - 2000
                </h1>
                <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
                    Test
                </Container>
            </Grid>

            <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
                <h1>
                    Black ... 2001 - 2010
                </h1>
                <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
                    Test
                </Container>
            </Grid>

            <Grid item xs={12} sm={10} style={{ backgroundColor: '#f0ffff'}}>
                <h1>
                    Black ... 2011 - 2020
                </h1>
                <Container maxWidth="sm" style={{ backgroundColor: '#a52a2a'}}>
                    Test
                </Container>
            </Grid>

        </Grid>
    )
}
