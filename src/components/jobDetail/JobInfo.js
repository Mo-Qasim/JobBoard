import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Media from 'react-media'
import { Typography, Button, Link } from '@material-ui/core'
import { leftSectionStyle } from '../../jss/styles'
import { Link as L } from 'react-router-dom'
import Tab from './Tab'

const useStyles = makeStyles(leftSectionStyle);

export default function JobInfo(props) {
    const classes = useStyles();

    return (
        <div>
            <L to="/">
                <div className="viewJobsWrapper padding_backBtn">
                    <Link className={`${classes.btn} ${classes.backBtn}`}> <ArrowBackIcon className={classes.icon} /> Back to Jobs</Link>
                </div>
            </L>

            <section className={classes.officeWrapper}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '18px' }}>
                    <Typography variant="h5">{props.job}</Typography>
                    <span className="jd_location location_respsOff">Scaramento CA</span>
                </div>

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
        </div>
    )
}

