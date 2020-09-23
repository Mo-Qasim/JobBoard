import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core'
import { leftSectionStyle } from '../../jss/styles'
import profile from '../../images/icons/profile.png'


const useStyles = makeStyles(leftSectionStyle);

export default function ApplyBtn() {
    const classes = useStyles();

    return (
        <Button className={classes.btn}> <img src={profile} className={classes.applyIcon} /> Apply Now </Button>

    )
}

