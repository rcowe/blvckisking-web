import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export default function FixedContainer() {
    return (
        <React.Fragment>
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '50vh' }} />
            </Container>
        </React.Fragment>
    );
}