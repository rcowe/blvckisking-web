import React from 'react';
import Typography from "@material-ui/core/Typography";
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@material-ui/core';

function Example(props)
{
    const items = [
        {
            title: "Welcome to BLVCKISKING",
            description: "This is a project to raise awareness. To make you aware. Aware that Black Is King."
        },
        {
            title: "Why BLVCKISKING?",
            description: "Inspired by Queen B's 'Black Is King' film, a labor of love, a visual companion of the 2019 Lion King Movie." +
                "This site is meant to be a visual exercise that Black people existed long before slavery, persevered throughout and are stepping into greatness in our present. " +
                "Your existence is radical."
        },
    ]
    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
export default Example;

function Item(props)
{
    return (
        <Paper>
            <Typography
                color="textPrimary"
                gutterBottom
                variant="h2"
                align="center"
            >
                {props.item.title}
            </Typography>
            <Typography
                noWrap={true}
            >
                {props.item.description}
            </Typography>

            <Button className="CheckButton">
                Step into History
            </Button>
        </Paper>
    )
}