import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { headerStyle } from '../../jss/styles'
import { Grid, Button } from '@material-ui/core'

const useStyles = makeStyles(headerStyle);

const HeaderContentAS = (props) => {
    const classes = useStyles();

    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={false} md={2}></Grid>
                <Grid item xs={12} md={4}>
                    <input className={classes.textArea} placeholder="Job title and keywords" />
                </Grid>
                <Grid item xs={12} md={4}>
                    <input className={classes.textArea} placeholder="Any Job Categories" />
                </Grid>
                <Grid item xs={false} md={2}></Grid>

            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={false} md={2}></Grid>
                <Grid item xs={12} md={4}>
                    <input className={classes.textArea} placeholder="Location" />
                </Grid>
                <Grid item xs={12} md={2}>
                    <input className={classes.textArea} placeholder="Distance" />
                </Grid>
                <Grid item xs={12} md={2}>
                    <input className={classes.textArea} placeholder="Posted any Date" />
                </Grid>
                <Grid item xs={false} md={2}></Grid>

            </Grid>

            <Grid container spacing={1}>
                <Grid item xs={false} md={2}></Grid>
                <Grid item xs={false} md={5}>
                </Grid>
                <Grid item xs={12} md={1}>
                    <Button variant="outlined" className={classes.btnReset}> Reset </Button>
                </Grid>
                <Grid item xs={12} md={2}>
                    <Button className={classes.btnSearch}> Search Now </Button>
                </Grid>
                <Grid item xs={false} md={2}></Grid>
            </Grid>


        </>

    )
}

export default HeaderContentAS                      