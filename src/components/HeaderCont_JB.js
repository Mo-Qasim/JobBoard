import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { headerStyle } from '../jss/styles'
import { Grid, Button } from '@material-ui/core'
import { Link as L } from 'react-router-dom'

const useStyles = makeStyles(headerStyle);

const HeaderContentJB = (props) => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={false} md={2}></Grid>
                <Grid item xs={12} md={3}>
                    <input className={classes.textArea} placeholder="Job title and keywords" />
                </Grid>
                <Grid item xs={12} md={3}>
                    <input className={classes.textArea} placeholder="Location" />
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button className={classes.btn}> Search </Button>
                </Grid>
                <Grid item xs={false} md={2}></Grid>

            </Grid>


            <Grid container spacing={2}>
                <Grid item xs={false} md={2}>
                </Grid>
                <Grid item className={classes.respo} xs={12} md={10}>
                    <L to="/search">
                        <Button className={classes.link}>Advanced Search</Button>
                    </L>
                </Grid>
            </Grid>
        </>

    )
}

export default HeaderContentJB                       