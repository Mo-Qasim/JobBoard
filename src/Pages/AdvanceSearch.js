import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { jobBaordStyle } from '../jss/styles'
import { Typography, Container, Grid } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import Media from 'react-media'

import Navbar from '../components/Navbar'
import Header from '../components/Header'
import HeaderContentAS from '../components/advanceSearch/HeaderCont_AS'
import SaveShare from '../components/advanceSearch/SaveShare'
import Result from '../components/advanceSearch/Result'
import Card from '../components/advanceSearch/Card'
import Footer from '../components/Footer'

import job_detail from '../API_data/job_detail.json'

const useStyles = makeStyles(jobBaordStyle);

const AdvanceSearchWrapper = () => {
    const [page, setPage] = React.useState(1);

    const handleChange = (event, value) => {
        setPage(value);
    };
    const classes = useStyles();
    return (
        <>
            <Header>
                <HeaderContentAS />
            </ Header>
            <div style={{ padding: '40px 0 120px 0' }}>
                <Container>
                    <Grid container spacing={4}>
                        <Grid item xs={false} md={3}>

                        </Grid>

                        <Grid item xs={12} md={9}>
                        </Grid>
                    </Grid>

                    <Grid container spacing={4}>
                        <Grid item xs={12} md={3}>
                            <div className="resp_height"></div>
                            <Result />
                            <SaveShare />
                        </Grid>

                        <Grid item xs={12} md={9}>
                            <div className="paginationWrapper resp_height" >

                                <Typography className={classes.jobDetailTitle} variant="body2" > Displyaing 1 to 24 of 147 results </Typography>
                                <Media query="(max-width: 400px)" render={() =>
                                    (
                                        <Pagination size="small" count={24} page={page} onChange={handleChange} color="primary" />
                                    )} />
                                <Media query="(min-width: 401px)" render={() =>
                                    (
                                        <Pagination count={24} page={page} onChange={handleChange} color="primary" />
                                    )} />
                            </div>
                            <Card JobDetail={job_detail} />
                            <div className="paginationWrapper resp_height" >
                                <Typography className={classes.jobDetailTitle} variant="body2" > Displyaing 1 to 24 of 147 results </Typography>
                                <Media query="(max-width: 400px)" render={() =>
                                    (
                                        <Pagination size="small" count={24} page={page} onChange={handleChange} color="primary" />
                                    )} />
                                <Media query="(min-width: 401px)" render={() =>
                                    (
                                        <Pagination count={24} page={page} onChange={handleChange} color="primary" />
                                    )} />
                            </div>
                        </Grid>
                    </Grid>

                    <Media query="(max-width: 959px)" render={() =>
                        (
                            <SaveShare />
                        )} />

                </Container>
            </div>

            <Footer />
        </>
    )
}

export default AdvanceSearchWrapper