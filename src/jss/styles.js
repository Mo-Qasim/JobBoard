export const navBarStyle = {
    root: {
        backgroundColor: 'rgba(0, 147, 208, 0.8)',
        padding: '13px 0',
    },
    logo: {
        marginRight: '28px',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: '12px',
        padding: '4px 10px',
        border: '3px solid #f5b622',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 14px',
    },
    title2: {
        display: 'flex',
        alignItems: 'center',
        padding: '11px 2px',
        borderBottom: '1px solid #e2e2e2',
    },
    noBorder: {
        border: 'none',
    },
    link: {
        transition: '0.2s ease-in',
        fontWeight: '300',
        fontSize: '16px',
        color: '#fff',

        '&:hover': {
            color: '#e2e2e2 !important',
            textDecoration: 'none',
        },
    },
    icon: {
        width: '14px',
        color: '#fff',
        marginRight: '6px',
    }
}

export const headerStyle = {
    btn: {
        borderRadius: '5px',
        backgroundColor: '#0093d0',
        color: '#fff',
        width: '100%',
        fontWeight: '700',
        height: '50px',

        '&:hover': {
            backgroundColor: '#0286bc',
        }
    },
    btnSearch: {
        borderRadius: '5px',
        backgroundColor: '#fdc236',
        textTransform: 'none',
        color: '#121212',
        width: '100%',
        height: '50px',
        fontWeight: 'bold',

        '&:hover': {
            backgroundColor: '#ffb300',
        }
    },
    btnReset: {
        borderRadius: '5px',
        backgroundColor: 'transparent',
        border: '2px solid #fdc236',
        textTransform: 'none',
        color: '#fdc236',
        width: '100%',
        height: '50px',
        fontWeight: 'bold',

        '&:hover': {
            backgroundColor: '#fdc236',
            color: '#22292d',
            fontWeight: 'bold',
        }
    },
    textArea: {
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        borderRadius: '5px',
        width: '100%',
        height: '50px',
        paddingLeft: '22px',
        borderStyle: 'none',
        marginBottom: '14px',

        '@media(max-width: 959px)': {
            marginBottom: '0',
        }
    },
    heading: {
        fontSize: '50px',
        fontWeight: '700',
        marginBottom: '18px',
        marginTop: '86px',

        '@media(max-width: 600px)': {
            fontSize: '34px',
        }
    },
    link: {
        color: '#fff',
    },
    respo: {
        '@media(min-width: 959px)': {
            textAlign: 'left !important',
        }
    }
}

export const jobCatStyle = {
    root: {
        backgroundColor: '#efefef',
        padding: '12px 20px',
        display: 'flex',
        marginBottom: '12px',
        transition: '0.2s ease -in',
        boxShadow: 'none',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#29679f',

        '&:hover': {
            backgroundColor: '#29679f',
            color: '#fff !important',
            borderRadius: '5px',
            cursor: 'pointer',
        },
    },

    circle: {
        backgroundColor: '#fff',
        color: '#2d2d2d',
        borderRadius: '50%',
        fontWeight: '700',
        marginRight: '18px',
        width: '30px',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    typo: {
        fontWeight: 'normal',

        '@media(max-width: 600px)': {
            fontSize: '1rem',
        },
    },
    postion: {
        color: '#444',
        fontWeight: '500',

        '@media(max-width: 600px)': {
            fontSize: '1rem',
        },
    }
}

export const ApplyNowStyle = {
    root: {
        width: '100%',
        backgroundColor: '#3097d1',
        color: '#fff',
        padding: '56px 0',
        textAlign: 'center',
        marginBottom: '20px',
    },
    btn: {
        borderRadius: '5px',
        backgroundColor: '#f5b622',
        color: '#222',
        width: '170px',
        height: '50px',
        fontWeight: '700',

        '&:hover': {
            backgroundColor: '#fdc236',
        }
    },
    heading: {
        fontSize: '32px',
        fontWeight: '700',
        padding: '0 30%',

        '@media(max-width: 600px)': {
            padding: '0 6%',
            fontSize: '20px',
        }
    },
    subHeading: {
        margin: '6px 0 18px 0',
        fontSize: '18px',
    }
}

export const CardStyle = {
    root: {
        padding: '15px 30px 24px 30px',
        boxShadow: '0px 1px 3px 0px #0000002b',
        borderRadius: '5px',
        marginBottom: '18px',
        transition: '0.4s ease -in',
        backgroundColor: '#ffffff',

        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
        },
    },
    headingTitle: {
        fontSize: '1.5rem',

        '@media(max-width: 400px)': {
            fontSize: '1.2rem',
        }
    },
    setWidth: {
        width: '100%',
    },
    jobdisc: {
        fontSize: '16px',
        color: '#6f6f6f',
        lineHeight: '1.5',
    },
    jobDate: {
        fontWeight: '700',
        color: '#29679f',
        marginTop: '5px',
    },
    rootBar: {
        padding: '15px 30px',
        boxShadow: '0px 1px 3px 0px #0000002b',
        borderRadius: '5px',
        marginBottom: '18px',
        transition: '0.4s ease -in',
        backgroundColor: '#ffffff',
        color: '#000',
    },
    barTitle: {
        marginBottom: 'none',
        fontWeight: '700',
        fontSize: '16px',
        color: '#444',
    }
}


export const jobDetailStyle = {
    root: {
        padding: '15px 30px 24px 30px',
        boxShadow: '0px 1px 3px 0px #0000002b',
        borderRadius: '5px',
        marginBottom: '18px',
        transition: '0.4s ease -in',
        backgroundColor: '#ffffff',

        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)',
        },
    },
    headingTitle: {

        '@media(max-width: 400px)': {
            fontSize: '1.2rem',
        },
    },
    jobdisc: {
        fontSize: '16px',
        color: '#6f6f6f',
        lineHeight: '1.5',
    },
    jobDate: {
        fontWeight: '700',
        color: '#29679f',
        marginTop: '5px',
    }
}

export const saveShareStyle = {

    title: {
        marginBottom: '12px',
        color: '#666',
        fontWeight: '700',
    },
    jobsCount: {
        backgroundColor: '#000',
        color: '#fff',
        display: 'inline-block',
        marginLeft: '8px',
        padding: '3px 16px',
        fontSize: '12px',
        borderRadius: '50px',
    }
}

export const leftSectionStyle = {
    btn: {
        position: 'relative',
        borderRadius: '5px',
        backgroundColor: '#0093d0',
        borderRadius: 0,
        color: '#fff',
        width: '100%',
        height: '56px',
        fontWeight: '700',
        textTransform: 'none',
        transition: '0.4s easi-in',

        '&:hover': {
            backgroundColor: '#0286bc',
        }
    },

    backBtn: {
        backgroundColor: 'transparent',
        border: '2px solid #000',
        color: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '&:hover': {
            textDecoration: 'none',
            backgroundColor: '#e2e2e2',
            borderColor: '#e2e2e2',
            color: '#333',
        },

        '@media(max-width: 959px)': {
            border: 'none',
            justifyContent: 'flex-start',

        }
    },
    icon: {
        marginRight: '16px',
    },

    officeWrapper: {
        borderRadius: '8px',
        backgroundColor: '#fff',
        marginBottom: '12px',
        padding: '14px 28px',
    },
    toggleWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '18px',
    },
    toggleButton: {
        borderRadius: '5px',
        backgroundColor: '#0093d0',
        borderRadius: 0,
        color: '#fff',
        width: '49%',
        height: '56px',
        fontWeight: '700',
        textTransform: 'none',

        '&:hover': {
            backgroundColor: '#0286bc',
            color: '#fff'
        }
    },
    active: {
        backgroundColor: '#fff',
        color: '#000',
    },
    applyIcon: {
        position: 'absolute',
        left: '30px',
    },
    text: {
        color: '#222',
        fontSize: '14px',
    },
    NV_title: {
        marginTop: '12px',
        color: '#0093d0',
        fontSize: '16px',
        fontWeight: '700',
    },
    subTitle: {
        marginTop: '10px',
        fontSize: '16px',
        fontWeight: '700',
    },
    NV_wrapper: {
        borderRadius: '8px',
        backgroundColor: '#fff',
        marginBottom: '12px',
        padding: '22px 28px 38px 28px',
    }
}

export const rightSectionStyle = {
    btn: {
        borderRadius: '5px',
        backgroundColor: '#0093d0',
        borderRadius: 0,
        color: '#fff',
        width: '220px',
        height: '56px',
        fontWeight: '700',
        textTransform: 'none',
        '&:hover': {
            backgroundColor: '#0286bc',
        }
    },

    rightBtn: {
        marginLeft: '12px',
        backgroundColor: '#26a1b6',
    },

    icon: {
        marginRight: '16px',
    },

    fullOn959: {
        '@media(max-width: 959px)': {
            width: '100%',
            margin: 0,
            marginBottom: '12px',
        }
    },

    EventGreet: {
        borderRadius: '8px 8px 0px 0px',
        backgroundColor: '#fff',
        padding: '14px 28px',
    },

    AboutMarathon: {
        padding: '14px 28px',
    },

    ContactUs: {
        borderRadius: '0px 0px 8px 8px',
        backgroundColor: '#fff',
        padding: '14px 28px',

    },
    subTitle: {
        marginTop: '10px',
        fontSize: '16px',
        fontWeight: '700',
    },
    text: {
        color: '#777',
    }
}

export const TabStyle = {
    btn: {
        position: 'relative',
        borderRadius: '5px',
        backgroundColor: '#0093d0',
        borderRadius: 0,
        color: '#fff',
        width: '100%',
        height: '56px',
        fontWeight: '700',
        textTransform: 'none',
        transition: '0.4s easi-in',

        '&:hover': {
            backgroundColor: '#30c0d8',
        }
    },

    backBtn: {
        backgroundColor: 'transparent',
        border: '2px solid #000',
        color: '#000',

        '&:hover': {
            backgroundColor: '#0093d0',
            border: 'none',
            color: '#fff',
        }
    },
    icon: {
        marginRight: '16px',
    },

    officeWrapper: {
        borderRadius: '8px',
        backgroundColor: '#fff',
        marginBottom: '12px',
        padding: '14px 28px',
    },
    toggleWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '18px',
    },
    toggleButton: {
        borderRadius: '5px',
        backgroundColor: '#0093d0',
        borderRadius: 0,
        color: '#fff',
        width: '49%',
        height: '56px',
        fontWeight: '700',
        textTransform: 'none',

        '&:hover': {
            backgroundColor: '#30c0d8',
            color: '#fff'
        }
    },
    active: {
        backgroundColor: '#fff',
        color: '#000',
    },
    applyIcon: {
        position: 'absolute',
        left: '30px',
    },
    text: {
        color: '#222',
        fontSize: '14px',
    },
    NV_title: {
        marginTop: '12px',
        color: '#0093d0',
        fontSize: '16px',
        fontWeight: '700',
    },
    subTitle: {
        marginTop: '10px',
        fontSize: '16px',
        fontWeight: '700',
    },
    NV_wrapper: {
        borderRadius: '8px',
        backgroundColor: '#fff',
        marginBottom: '12px',
        padding: '22px 28px 38px 28px',
    }
}

export const jobBaordStyle = {
    jobDetailTitle: {
        margin: '30px 0 34px 0',
        fontWeight: '700',

        '@media(max-width: 959px)': {
            textAlign: 'center',
        }
    },
    pagination: {
        color: 'red'
    },

    noMargin: {
        marginBottom: '0',
    },
    btn2: {
        borderRadius: '5px',
        backgroundColor: '#fdc236',
        borderRadius: 0,
        marginTop: '18px',
        color: '#333',
        width: '100%',
        height: '56px',
        fontWeight: '700',
        textTransform: 'none',

        '&:hover': {
            backgroundColor: '#ffb300',
        },
    },
    fullWidth: {
        width: '100%',
    },
    btnBottom: {
        backgroundColor: '#0093d0',
        color: '#fff',

        '&:hover': {
            backgroundColor: '#0286bc',
        }
    },
    icon: {
        position: 'absolute',
        left: '30px',
    },
    darkIcon: {
        color: '#333'
    },
    btn: {
        borderRadius: '5px',
        backgroundColor: '#0093d0',
        color: '#fff',
        width: '190px',
        height: '56px',

        '&:hover': {
            backgroundColor: '#0286bc',
        }
    }
}

export const footerStyle = {
    icon: {
        margin: '0 4px 0 4px',
        width: '16px',
    }
}