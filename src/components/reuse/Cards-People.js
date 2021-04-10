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
import PeopleShow from "../pages/PeopleShow";

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

export default function CardsPeople(props) {
    // const {history}  = props;
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://blvckisking-api-app.herokuapp.com/people")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const classes = useStyles()

    return (
        <Grid container spacing={3}>
            {data.map((people) => (
                <Grid key={people.id} item xs={12} sm={4}>
                    <Card className={classes.card} onClick={() => history.push(`/people/${people.id}`)}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                alt={people.peoplename}
                                height="320"
                                image={people.image1}
                                title={people.peoplename}
                                className={classes.media}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {people.firstname} {people.lastname}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary" endpoint={`/people/${people.id}`}>
                                <a href={`/people/${people.id}`}>Learn More</a>
                            </Button>
                            <Button size="small" color="primary">
                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site http://www.blvkisking.com."
                                   title="Share by Email"> Share
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))
            }
            <PeopleShow
            data={data}
            >

            </PeopleShow>
        </Grid>
    )
}
