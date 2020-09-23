import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { jobBaordStyle } from '../jss/styles'
import { Container, Grid } from '@material-ui/core'
import Media from 'react-media'

import Navbar from '../components/Navbar'

import JobInfo from '../components/jobDetail/JobInfo'
import ApplyBtn from '../components/jobDetail/ApplyBtn'
import Tab from '../components/jobDetail/Tab'

import JobDescription from '../components/jobDetail/JobDescription'
import SaveShare from '../components/jobDetail/SaveShare'

import Footer from '../components/Footer'

const useStyles = makeStyles(jobBaordStyle);

const JobDetailWrapper = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />

            <div style={{ paddingBottom: '120px' }}>
                <Container>
                    <Media query="(max-width: 959px)" render={() =>
                        (
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <JobInfo job="Event Greeters" />
                                    <ApplyBtn />
                                </Grid>

                                <Grid item xs={12} md={8}>

                                    <JobDescription jobTitle="" />
                                    <SaveShare />
                                    <Tab />

                                </Grid>
                            </Grid>
                        )} />
                    <Media query="(min-width: 960px)" render={() =>
                        (
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={4}>
                                    <JobInfo />
                                    <ApplyBtn />
                                    <Tab />
                                </Grid>

                                <Grid item xs={12} md={8}>

                                    <SaveShare />
                                    <JobDescription jobTitle="Event Greeters" />

                                </Grid>
                            </Grid>
                        )} />

                </Container>
            </div>

            <Footer />
        </>
    )
}

export default JobDetailWrapper