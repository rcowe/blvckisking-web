import React, {Component, useEffect, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";


const styles = {
    theme: {
        background: "linear-gradient(45deg, #613395 30%, #713395 90%)"
    }
}

const useStyles = makeStyles(styles);

export default class PeopleShow extends Component {

    render() {
        return (
            <Grid container>
                <Grid item className={useStyles.theme}>
                   <h1>
                       {this.props.firstname}
                   </h1>
                    <h2>
                        TEXT
                    </h2>
                </Grid>
            </Grid>
        );
    }
}

