import React from 'react'
import { CardStyle } from '../../jss/styles'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Card } from '@material-ui/core'
import { Link } from 'react-router-dom'
const useStyles = makeStyles(CardStyle);

const JobView = (props) => {
    const classes = useStyles();
    return (
        <div>
            <div className="hideOn992">
                <Grid className={classes.rootBar} container spacing={1}>
                    <Grid item md={6}>
                        <Typography className={classes.barTitle} variant="subtitle2">
                            Job Title
                    </Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography className={classes.barTitle} variant="subtitle2">
                            Location
                    </Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography className={classes.barTitle} variant="subtitle2">
                            Office
                    </Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography className={classes.barTitle} variant="subtitle2">
                            Date Posted
                    </Typography>
                    </Grid>
                </Grid>
            </div>

            {
                props.JobDetail.map((job) => {
                    return (
                        <Link to="/detail">
                            <Grid className={classes.root} container spacing={1}>
                                <Grid item md={6}>
                                    <Typography variant="h5"> {job.position} </Typography>
                                    <div style={{ margin: '16px 0' }}>
                                        <span className="jd_location">{job.location}</span>
                                        <span className="jd_type">{job.type}</span>
                                    </div>

                                    <Typography className={classes.jobdisc} variant="body2" paragraph>
                                        {job.job_disc}
                                    </Typography>

                                </Grid>
                                <Grid item md={2}>
                                    <Typography className={`${classes.jobDate} hideOn992`} variant="subtitle2">
                                        {job.area}
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography className={`${classes.jobDate} hideOn992`} style={{ margin: '5px 18px' }} variant="subtitle2">
                                        {job.office}
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography className={classes.jobDate} variant="subtitle2">
                                        {job.date}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Link>
                    )
                })

            }
        </div >
    )
}

export default JobView                                      