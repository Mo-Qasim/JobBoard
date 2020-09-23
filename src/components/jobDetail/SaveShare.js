import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import { rightSectionStyle } from '../../jss/styles'

import save from '../../images/icons/save.png'
import share from '../../images/icons/share.png'

const useStyles = makeStyles(rightSectionStyle);

export default function SaveShare() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="viewJobsWrapper">
                <Button className={`${classes.btn} ${classes.fullOn959}`}> <img src={save} className={classes.icon} /> Save this Job</Button>
                <Button className={`${classes.btn} ${classes.rightBtn}  ${classes.fullOn959}`}> <img src={share} className={classes.icon} /> Share this Job</Button>
            </div>
        </div>
    )
}

