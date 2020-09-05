import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import logo from '../images/logo.png'
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    header__section: {
        backgroundColor: '#fff',
        borderBottom: '1px solid lightgray',
        position: 'fixed',
        top: '0',
        width: '100%',
        zIndex: '1'
    },
    header__bg: {
        backgroundColor: '#fff',
        color: 'gray'
    },
    no__boxShadow: {
        boxShadow: 'none'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    logo: {
        width: '220px',
    }
}));

function Header() {

    const classes = useStyles();

    return (
        <header className={classes.header__section}>
            <Container maxWidth="md">
                <div className={classes.root}>
                    <AppBar position="static" className={classes.no__boxShadow}>
                        <Toolbar className={classes.header__bg}>
                            <Typography variant="h6" className={classes.title}>
                                <img src={logo} alt="" className={classes.logo}/>
                            </Typography>
                            <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </div>
            </Container>
        </header>
    )
}

export default Header
