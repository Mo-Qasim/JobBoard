import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { jobBaordStyle } from '../jss/styles'
import { Typography, Button, Container, Grid } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination';
import Media from 'react-media'

import save from '../images/icons/save _black.png'
import share from '../images/icons/share.png'

import Header from '../components/Header'
import HeaderContentAS from '../components/advanceSearch/HeaderCont_AS'
import SaveShare from '../components/jobDetail/SaveShare'
import Result from '../components/advanceSearch/Result'
import Card from '../components/advanceSearch/Card'
import Footer from '../components/Footer'

import job_detail from '../API_data/job_detail.json'

const useStyles = makeStyles(jobBaordStyle);

const AdvanceSearchWrapper = () => {
    const classes = useStyles();
    return (
        <>
            <Header>
                <HeaderContentAS />
            </ Header>

            <Container>

                <div style={{ padding: '40px 0 80px 0' }}>
                    <Grid container spacing={4}>
                        <Grid className={classes.fullWidth} item xs={false} md={3}>
                            <div className="resp_height"></div>
                            <Result />
                            <Button className={classes.btn2}> <img className={classes.icon} src={save} />  Save This Job </Button>
                            <Button className={`${classes.btn2} ${classes.btnBottom}`}> <img className={classes.icon} src={share} />  Share This Job </Button>

                        </Grid>

                        <Grid item xs={12} md={9}>

                            <div className="paginationWrapper resp_height" >
                                <Typography className={classes.jobDetailTitle} variant="body2" > Displyaing 1 to 24 of 147 results </Typography>
                                <Media query="(max-width: 400px)" render={() =>
                                    (
                                        <Pagination size="small" count={24} color="primary" />
                                    )} />
                                <Media query="(min-width: 401px)" render={() =>
                                    (
                                        <Pagination count={24} color="primary" />
                                    )} />
                            </div>

                            <Card JobDetail={job_detail} />

                            <div className="paginationWrapper resp_height" >
                                <Typography className={classes.jobDetailTitle} variant="body2" > Displyaing 1 to 24 of 147 results </Typography>
                                <Media query="(max-width: 400px)" render={() =>
                                    (
                                        <Pagination size="small" count={24} color="primary" />
                                    )} />
                                <Media query="(min-width: 401px)" render={() =>
                                    (
                                        <Pagination count={24} color="primary" />
                                    )} />
                            </div>
                        </Grid>
                    </Grid>
                </div>

                <Media query="(max-width: 959px)" render={() =>
                    (
                        <div style={{ marginBottom: '60px' }}>
                            <Button className={classes.btn2}> <img className={classes.icon} src={save} />  Save This Job </Button>
                            <Button className={`${classes.btn2} ${classes.btnBottom}`}> <img className={classes.icon} src={share} />  Share This Job </Button>
                        </div>

                    )} />

            </Container>
            <Footer />
        </>
    )
}

export default AdvanceSearchWrapper