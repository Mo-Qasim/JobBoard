export const navBarStyle = {
    root: {
        backgroundColor: '#0093d0',
        padding: '13px 0',
    },
    logo: {
        marginRight: '28px',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: '16px',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 14px',
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
        width: '17px',
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
    },
    heading: {
        fontSize: '50px',
        fontWeight: '700',
        marginBottom: '18px',
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
        padding: '18px 20px',
        display: 'flex',
        marginBottom: '8px',
        transition: '0.2s ease -in',
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
        fontWeight: '300',
    },
    postion: {
        color: '#444',
        fontWeight: '300',
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
        fontSize: '34px',
        fontWeight: '700',
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
    btn: {
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
        }
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