import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { jobBaordStyle } from '../jss/styles'
import { Typography, Button, Container, Grid } from '@material-ui/core'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import HeaderContentJB from '../components/HeaderCont_JB'
import ApplyNow from '../components/ApplyNow'
import JobCatogary from '../components/JobCatogary'
import JobView from '../components/JobView'
import Footer from '../components/Footer'

import job_catogaries from '../API_data/job_cat.json'
import job_detail from '../API_data/job_detail.json'

const useStyles = makeStyles(jobBaordStyle);


const JobBoardWrapper = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />
            <Header>
                <HeaderContentJB />
            </ Header>
            <ApplyNow />

            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography className={classes.jobDetailTitle} variant="h5" > Job Categories </Typography>
                        <JobCatogary JobCatogary={job_catogaries} />
                    </Grid>

                    <Grid item xs={12} md={8}>
                        <Typography className={classes.jobDetailTitle} variant="h5" > New Opportunities </Typography>
                        <JobView JobDetail={job_detail} />
                    </Grid>
                </Grid>

                <div className="viewJobsWrapper">
                    <Button className={classes.btn}> View All Jobs</Button>
                </div>
            </Container>

            <Footer />
        </>
    )
}

export default JobBoardWrapper