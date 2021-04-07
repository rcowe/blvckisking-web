import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function CardsEvents() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://blvckisking-api-app.herokuapp.com/events")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const classes = useStyles();

    return (
            <Grid container spacing={3}>
                {data.map((event) => (
                    <Grid key={event.id} item xs={12} sm={4}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={event.eventname}
                                    height="140"
                                    image={event.image1}
                                    title={event.eventname}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {event.eventname}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
                }
            </Grid>

    )
}

