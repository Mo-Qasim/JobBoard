import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'
import { saveShareStyle } from '../../jss/styles'

import save from '../../images/icons/save _black.png'
import share from '../../images/icons/share.png'

const useStyles = makeStyles(saveShareStyle);

const SaveShare = (props) => {
    const classes = useStyles();

    return (//<SaveIcon className={`${classes.icon} ${classes.darkIcon}`} />
        <>
            <Button className={classes.btn}> <img className={classes.icon} src={save} />  Save This Job </Button>
            <Button className={`${classes.btn} ${classes.btnBottom}`}> <img className={classes.icon} src={share} />  Share This Job </Button>

        </>

    )
}

export default SaveShare                      