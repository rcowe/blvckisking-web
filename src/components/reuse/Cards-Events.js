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
import history from '../reuse/history';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)",
        backgroundColor: "#fafafa",
    },
    media: {
        height: 300,
    },
});

export default function CardsEvents(props) {
    // const {history}  = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://blvckisking-api-app.herokuapp.com/events")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const classes = useStyles()

        return (
            <Grid container spacing={3}>
                {data.map((event) => (
                    <Grid key={event.id} item xs={12} sm={4}>
                        <Card className={classes.card} onClick={() => history.push(`/events/${event.id}`)}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt={event.eventname}
                                    height="140"
                                    image={event.image1}
                                    title={event.eventname}
                                    className={classes.media}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {event.eventname}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" endpoint={`/events/${event.id}`}>
                                    <a href={`/events/${event.id}`}>Learn More</a>
                                </Button>
                                <Button size="small" color="primary">
                                    <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site http://www.blvckisking.com."
                                       title="Share by Email"> Share
                                    </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
                }
            </Grid>

        )

}

