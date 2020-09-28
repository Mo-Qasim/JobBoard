import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { navBarStyle } from '../jss/styles'
import { AppBar, Toolbar, IconButton, Typography, Container, Link } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ReplyIcon from '@material-ui/icons/Reply';
import SaveIcon from '@material-ui/icons/Save';
import TelegramIcon from '@material-ui/icons/Telegram';
import FilterListIcon from '@material-ui/icons/FilterList';
import MenuIcon from '@material-ui/icons/Menu';

import search from '../images/icons/search_now.png';
import save from '../images/icons/save.png';
import apply from '../images/icons/apply_now.png';
import back from '../images/icons/back.png';
import account from '../images/icons/account.png';

import logo from '../images/MarathonLogo.png';

import { Link as L } from 'react-router-dom'

const useStyles = makeStyles(navBarStyle);

export default function PrimarySearchAppBar() {
    const [toggle, setToggle] = useState(false);
    const classes = useStyles();
    return (
        <div className={classes.grow}>
            <AppBar className={classes.root} position="relative">
                <Container>
                    <Toolbar>
                        <L to="/">
                            <img className={classes.logo} src={logo} alt="Brand logo" />
                        </L>
                        <div className="desktopMenu">
                            <Typography className={classes.title} variant="h6">
                                <img src={back} className={classes.icon} />
                                <Link className={classes.link} href="#">
                                    Back to marathonstaffing.com
                             </Link>
                            </Typography>
                            <Typography className={classes.title} variant="h6">
                                <img src={apply} className={classes.icon} />
                                <Link className={classes.link} href="#">
                                    Apply Now
                             </Link>
                            </Typography>
                            <L to="/search">
                                <Typography className={classes.title} variant="h6">
                                    <img src={search} className={classes.icon} />
                                    <Link className={classes.link} href="#">
                                        Advanced Search
                             </Link>
                                </Typography></L>
                            <Typography className={classes.title} variant="h6">
                                <img src={save} className={classes.icon} />
                                <Link className={classes.link} href="#">
                                    Saved Jobs & Searches
                             </Link>
                            </Typography>
                        </div>

                        <div className={classes.grow}>

                        </div>
                        <Typography className={`${classes.title} desktopMenu`} variant="h6">
                            <img src={account} className={classes.icon} />
                            <Link className={classes.link} href="#">
                                Account Log in
                             </Link>
                        </Typography>
                        <IconButton
                            onClick={() => setToggle(!toggle)}
                            edge="start"
                            style={{ display: 'none' }}
                            className={`${classes.menuButton} showOnmbl`}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>

                    </Toolbar>

                </Container>
            </AppBar>


            <div
                className={toggle ? `toggleOn` : 'toggleOff'}>
                <Typography className={classes.title2} variant="h6">
                    <img src={back} className={classes.icon} />
                    <Link className={classes.link} href="#">
                        Back to marathonstaffing.com
                             </Link>
                </Typography>
                <Typography className={classes.title2} variant="h6">
                    <img src={apply} className={classes.icon} />
                    <Link className={classes.link} href="#">
                        Apply Now
                             </Link>
                </Typography>

                <L to="/search">
                    <Typography className={classes.title2} variant="h6">
                        <img src={search} className={classes.icon} />
                        <Link className={classes.link} href="#">
                            Advanced Search
                             </Link>
                    </Typography>
                </L>
                <Typography className={classes.title2} variant="h6">
                    <img src={save} className={classes.icon} />

                    <Link className={classes.link} href="#">
                        Saved Jobs & Searches
                             </Link>
                </Typography>
                <Typography className={`${classes.title2} ${classes.noBorder}`} variant="h6">
                    <img src={account} className={classes.icon} />

                    <Link className={classes.link} href="#">
                        Account Log in
                             </Link>
                </Typography>
            </div>
        </div >
    );
}
