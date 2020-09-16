import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { jobCatStyle } from '../jss/styles'
import { Typography, Card } from '@material-ui/core'

const useStyles = makeStyles(jobCatStyle);

const JobCatogary = (props) => {
    const classes = useStyles();

    return (
        <>
            {
                props.JobCatogary.map((job) => {
                    return (
                        <Card className={`${classes.root} jobCat_container`}>

                            <Typography className={classes.typo} variant="h6"> {job.name} </Typography>

                            <div className="flex-center">
                                <a className={`${classes.circle} circle`}>{job.numOfJobs}</a>
                                <Typography className={`${classes.postion}  typo_pos`} variant="h6"> Positions </Typography>
                            </div>
                        </Card >
                    )
                })
            }
        </>

    )
}

export default JobCatogary                       