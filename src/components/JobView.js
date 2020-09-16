import React from 'react'
import { jobDetailStyle } from '../jss/styles'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card } from '@material-ui/core'
import { Link } from 'react-router-dom'
const useStyles = makeStyles(jobDetailStyle);

const JobView = (props) => {
    const classes = useStyles();
    return (
        <div>
            {
                props.JobDetail.map((job) => {
                    return (
                        <Link to="/detail">
                            <Card className={classes.root}>

                                <Typography variant="h5"> {job.position} </Typography>
                                <div className="jb_flexWrapper">
                                    <div>
                                        <span className="jd_location">{job.location}</span>
                                        <span className="jd_type">{job.type}</span>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', }}>
                                        <Typography className={classes.jobDate} variant="subtitle2">
                                            {job.date}
                                        </Typography>
                                    </div>
                                </div>

                                <Typography className={classes.jobdisc} variant="body2" paragraph>
                                    {job.job_disc}
                                </Typography>

                            </ Card>
                        </Link>
                    )
                })

            }
        </div>
    )
}

export default JobView                                      