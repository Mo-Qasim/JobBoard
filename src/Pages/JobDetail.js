import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { jobBaordStyle } from '../jss/styles'
import { Container, Grid } from '@material-ui/core'

import Navbar from '../components/Navbar'
import LeftSection from '../components/jobDetail/LeftSection'
import RightSection from '../components/jobDetail/RightSection'
import JobView from '../components/JobView'
import Footer from '../components/Footer'

import job_catogaries from '../API_data/job_cat.json'
import job_detail from '../API_data/job_detail.json'

const useStyles = makeStyles(jobBaordStyle);


const JobDetailWrapper = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar />

            <div style={{ paddingBottom: '120px' }}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <LeftSection />
                        </Grid>

                        <Grid item xs={12} md={8}>
                            <RightSection />

                        </Grid>
                    </Grid>

                </Container>
            </div>

            <Footer />
        </>
    )
}

export default JobDetailWrapper