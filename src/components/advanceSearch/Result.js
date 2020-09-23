import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import { Button, Typography } from '@material-ui/core'
import { saveShareStyle } from '../../jss/styles'

const useStyles = makeStyles(saveShareStyle);

const Result = (props) => {
    const classes = useStyles();

    return (
        <>
            <Typography className={classes.title} variant="h6" > All Jobs  <div className={classes.jobsCount}> {115} </div> </Typography>
            <Typography className={classes.title} variant="h6"> Matched Criteria <div className={classes.jobsCount}> {115} </div> </Typography>

        </>

    )
}

export default Result                      