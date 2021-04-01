import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import Contact from "./Contact";

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
            <Grid item xs={12} sm={10}>
                <h1>
                    Pre-Slavery
                </h1>
                <Container maxWidth="sm">
                    Test
                </Container>
            </Grid>
            <Grid item xs={2} sm={1}>
                <h1>
                    Timeline
                </h1>
            </Grid>
        </Grid>
    )
}
