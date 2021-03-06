import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';

import image from '../image/covid.png';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bolder',
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: "red" }} >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Covid-19
                     </Typography>
                    <img src={image} width='35' height='35' alt="github" ></img>
                    <a href='https://github.com/A-Rehman01/covid-19-app' target='_blank' rel="noopener noreferrer" ><GitHubIcon style={{fontSize:32,color:'white', marginLeft:15}}/></a>
                </Toolbar>
            </AppBar>
        </div>
    );
}
