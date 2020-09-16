import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid } from '@material-ui/core'
import { TabStyle } from '../../jss/styles'

const useStyles = makeStyles(TabStyle);


export default function LeftSection() {

    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const classes = useStyles();

    function handleTab1() {
        if (active1) {
            setActive1(active1);
        } else {
            setActive2(!active2);
            setActive1(!active1);
        }
    }

    function handleTab2() {
        if (active2) {
            setActive2(active2);
        } else {
            setActive2(!active2);
            setActive1(!active1);
        }
    }

    return (
        <div>

            <section>

                <br />  <Typography variant="h5">View other jobs in:</Typography> <br />

                <div className={classes.toggleWrapper}>
                    <Button onClick={handleTab1} id={active1 ? `btn` : `active`}> NV </Button>
                    <Button onClick={handleTab2} id={active2 ? `btn` : `active`}> Hospitality </Button>
                </div>

                {active1 ?
                    <section className={classes.NV_wrapper}>
                        <Typography className={classes.NV_title} variant="h6">Event Greeters in Las Vegas</Typography>
                        <Typography className={classes.text} variant="subtitle1">
                            Temporary :: Hospitality :: 12/06/2019
                </Typography>
                        <Typography className={classes.NV_title} variant="h6">Event Greeters in Las Vegas</Typography>
                        <Typography className={classes.text} variant="subtitle1">
                            Temporary :: Hospitality :: 12/06/2019
                </Typography>
                        <Typography className={classes.NV_title} variant="h6">Event Greeters in Las Vegas</Typography>
                        <Typography className={classes.text} variant="subtitle1">
                            Temporary :: Hospitality :: 12/06/2019
                </Typography>
                        <Typography className={classes.NV_title} variant="h6">Event Greeters in Las Vegas</Typography>
                        <Typography className={classes.text} variant="subtitle1">
                            Temporary :: Hospitality :: 12/06/2019
                </Typography>
                        <Typography className={classes.NV_title} variant="h6">Event Greeters in Las Vegas</Typography>
                        <Typography className={classes.text} variant="subtitle1">
                            Temporary :: Hospitality :: 12/06/2019
                </Typography>

                        <Typography className={classes.NV_title} variant="h6">Event Greeters in Las Vegas</Typography>
                        <Typography className={classes.text} variant="subtitle1">
                            Temporary :: Hospitality :: 12/06/2019
                </Typography>
                    </section>

                    :


                    <section className={classes.NV_wrapper}>
                        <Typography className={classes.NV_title} variant="h6">Hospital staff in San Diego</Typography>
                        <Typography className={classes.text} variant="subtitle1">
                            Permanent :: Hospitality :: 17/03/2019
                </Typography>
                        <Typography className={classes.NV_title} variant="h6">Hospital staff  in San Diego</Typography>
                        <Typography className={classes.text} variant="subtitle1">
                            Permanent :: Hospitality :: 17/03/2019
                </Typography>
                        <Typography className={classes.NV_title} variant="h6">Hospital staff in San Diego</Typography>
                        <Typography className={classes.text} variant="subtitle1">
                            Permanent :: Hospitality :: 17/03/2019
                </Typography>
                        <Typography className={classes.NV_title} variant="h6">Hospital staff in San Diego</Typography>
                        <Typography className={classes.text} variant="subtitle1">
                            Permanent :: Hospitality :: 17/03/2019
                </Typography>
                        <Typography className={classes.NV_title} variant="h6">Hospital staff in San Diego</Typography>
                        <Typography className={classes.text} variant="subtitle1">
                            Permanent :: Hospitality :: 17/03/2019
                </Typography>

                        <Typography className={classes.NV_title} variant="h6">Hospital staff in San Diego</Typography>
                        <Typography className={classes.text} variant="subtitle1">
                            Permanent :: Hospitality :: 17/03/2019
                </Typography>
                    </section>}



            </section>

        </div>
    )
}

