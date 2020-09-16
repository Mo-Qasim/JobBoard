import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { headerStyle } from '../jss/styles'
import { Typography, Container } from '@material-ui/core'

const useStyles = makeStyles(headerStyle);

const Header = (props) => {
    const classes = useStyles();

    return (
        <>
            <main id="headerSection">
                <Container align="center">
                    <Typography className={classes.heading} variant="h5" > Take Your Next Step </Typography>

                    {props.children}

                </Container>
            </main>
        </>

    )
}

export default Header                       