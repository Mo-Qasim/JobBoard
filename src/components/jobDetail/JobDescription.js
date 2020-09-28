import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import { Typography, Button, Container, Grid } from '@material-ui/core'
import { rightSectionStyle } from '../../jss/styles'

const useStyles = makeStyles(rightSectionStyle);

export default function JobDescription(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <section className={classes.EventGreet}>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                    <Typography variant="h5">{props.jobTitle}</Typography> <br />
                    <span className="jd_location location_respsOn">Scaramento CA</span>
                </div>

                <Typography className={classes.text} variant="subtitle1">
                    Marathon Staffing, a premiere Special Event Staffing company, is currently hiring Event and Convention Staff to work at an exciting international electronics event that is upcoming in Las Vegas, NV from Jan 2nd through the 10th, 2020.
                </Typography>
                <br />

                <Typography className={classes.text} variant="subtitle1">
                    Positions to include:
                </Typography>
                <br />


                <Typography className={classes.text} variant="subtitle1">
                    GREETERS<br />
                    App DIRECTIONALS - Must be proficient with smart phones<br />
                    EXHIBIT FLOOR GREETERS<br />
                    INFO KIOSK CLERKS - Must be smartphone/tablet savvy<br />
                    DOOR / ROOM / SESSION MONITORS<br />
                    BADGE HOLDER PICKUPS<br />
                    REGISTRATION TYPISTS - Must be able to type over 45 words per minute accurately<br />
                </Typography>
                <br />

                <Typography className={classes.text} variant="subtitle1">
                    If you like to meet new people in a fun, exciting atmosphere- this may be the opportunity you are looking for to enter the special event industry!
                </Typography>
                <br />

                <Typography className={classes.text} variant="subtitle1">
                    Pay rates: $12.66+ per hour depending on position
                </Typography>
                <br />

                <Typography className={classes.text} variant="subtitle1">
                    Please feel free to refer friends as we are seeking many new hires in Las Vegas!
                </Typography>
                <br />

                <Typography className={classes.text} variant="subtitle1">
                    **Marathon is an Equal Opportunity Employer**
                </Typography>
                <br />
            </section>



            <section className={classes.AboutMarathon}>
                <Typography variant="h5">About Marathon</Typography> <br />

                <Typography className={classes.text} variant="subtitle1">
                    Marathon is one of the largest regional employers, supplying temporary, on-site, contract, contract to hire and direct hire employees to companies throughout the United States. We have over three decades of staffing experience and place over 15,000 team members annually. Our offices are located in Alabama, Arizona, California, Massachusetts, Nevada, Ohio, South Carolina and Texas.   <br />
                Marathon exists to help people achieve.
              </Typography>
                <br />

                <Typography className={classes.text} variant="subtitle1">
                    MARATHON IS AN EQUAL OPPORTUNITY EMPLOYER
                </Typography>
                <br />
            </section>


            <section className={classes.ContactUs}>
                <Typography variant="h5">Contact Us</Typography> <br />

                <Typography className={classes.subTitle} variant="h6">Las Vegas</Typography>
                <Typography className={classes.text} variant="subtitle1">
                    6785 S Eastern Ave, Suite 2, Las Vegas, NV 89119
                </Typography>

                <Typography className={classes.subTitle} variant="h6">Phone Number:</Typography>
                <Typography className={classes.text} variant="subtitle1">
                    702-307-1320
                </Typography>

                <Typography className={classes.subTitle} variant="h6">Fax Number: </Typography>
                <Typography className={classes.text} variant="subtitle1">
                    For more information about this position, email Perfecto Quiachon
                </Typography>
            </section>

        </div>
    )
}

