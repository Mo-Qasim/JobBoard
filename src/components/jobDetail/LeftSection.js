import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Typography, Button, Grid } from '@material-ui/core'
import { leftSectionStyle } from '../../jss/styles'
import { Link } from 'react-router-dom'
import Tab from './Tab'

const useStyles = makeStyles(leftSectionStyle);

export default function LeftSection() {
    const classes = useStyles();

    return (
        <div>
            <Link to="/">
                <div className="viewJobsWrapper">
                    <Button className={`${classes.btn} ${classes.backBtn}`}> <ArrowBackIcon className={classes.icon} /> Back to Jobs</Button>
                </div>
            </Link>

            <section className={classes.officeWrapper}>
                <Typography className={classes.subTitle} variant="h6">Office</Typography>
                <Typography className={classes.text} variant="subtitle1">
                    NVLasV
                </Typography>

                <Typography className={classes.subTitle} variant="h6">Reference #</Typography>
                <Typography className={classes.text} variant="subtitle1">
                    CES 2020 LV
                </Typography>

                <Typography className={classes.subTitle} variant="h6">Location</Typography>
                <Typography className={classes.text} variant="subtitle1">
                    Las Vegas NV
                </Typography>

                <Typography className={classes.subTitle} variant="h6">Job Category</Typography>
                <Typography className={classes.text} variant="subtitle1">
                    Hospitality
                </Typography>

                <Typography className={classes.subTitle} variant="h6">Compensation </Typography>
                <Typography className={classes.text} variant="subtitle1">
                    $12.66 (hourly)
                </Typography>

                <Typography className={classes.subTitle} variant="h6">Hours per Week</Typography>
                <Typography className={classes.text} variant="subtitle1">
                    29
                </Typography>

                <Typography className={classes.subTitle} variant="h6">Work Schedule</Typography>
                <Typography className={classes.text} variant="subtitle1">
                    Various -
                </Typography>

                <Typography className={classes.subTitle} variant="h6">Duration </Typography>
                <Typography className={classes.text} variant="subtitle1">
                    1 week
                </Typography>

                <Typography className={classes.subTitle} variant="h6">Date Posted</Typography>
                <Typography className={classes.text} variant="subtitle1">
                    12/06/2019
                </Typography>
            </section>

            <Button className={classes.btn}> <AccountCircleIcon className={classes.applyIcon} /> Apply Now </Button>

            <Tab />
        </div>
    )
}

