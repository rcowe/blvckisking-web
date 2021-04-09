import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {makeStyles} from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
    },
});

function Example(props)

{
    const items = [
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857476/blvckisking-images/quote1_k7beyw.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857476/blvckisking-images/quote13_qji290.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857476/blvckisking-images/quote14_yeoy8c.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857476/blvckisking-images/quote7_e2czdf.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857476/blvckisking-images/quote3_mjcotw.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857475/blvckisking-images/quote6_kpkkqw.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857475/blvckisking-images/quote12_cg9vjw.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857475/blvckisking-images/quote9_vfkrxj.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857475/blvckisking-images/quote8_vgjgni.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857475/blvckisking-images/quote5_vmyxcl.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857475/blvckisking-images/quote11_jpedl1.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857475/blvckisking-images/quote2_d9byfc.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857475/blvckisking-images/quote10_mvliax.png"
        },
        {
            image: "https://res.cloudinary.com/di5thiyyl/image/upload/v1617857475/blvckisking-images/quote4_jxptsa.png"
        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) => <Item key={i} items={item.image} alt="image" /> )
            }
        </Carousel>
    )
}
export default Example;

function Item(props)
{
    const classes = useStyles();
    return (
        <Paper>
            <img src={props.items} className={classes.root}/>
        </Paper>
    )
}