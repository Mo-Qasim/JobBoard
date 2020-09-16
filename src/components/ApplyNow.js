import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ApplyNowStyle } from '../jss/styles'
import { Typography, Button, Container } from '@material-ui/core'

const useStyles = makeStyles(ApplyNowStyle);
const Header = () => {
    const classes = useStyles();

    return (

        <section className={classes.root}>
            <Container>

                <Typography className={classes.heading} variant="h5" > Take Your Next Step </Typography>
                <Typography className={classes.subHeading} variant="body2" paragraph> Create an account and let your next job find you. </Typography>
                <Button className={classes.btn}> Apply Now </Button>

            </Container>
        </section>

    )
}

export default Header                                      