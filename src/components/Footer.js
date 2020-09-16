import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CopyrightIcon from '@material-ui/icons/Copyright';
import { footerStyle } from '../jss/styles'

const useStyles = makeStyles(footerStyle);

const Footer = () => {
    const classes = useStyles();
    return (

        <footer>Copyright <CopyrightIcon className={classes.icon} /> 2019 Marathon Staffing</footer>

    )
}

export default Footer                       