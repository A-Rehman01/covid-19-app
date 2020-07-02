import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//import component

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 10,
    // display:'flex',
  },
  paper: {
    textAlign: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    margin: 10,
    color: theme.palette.text.secondary,
    marginTop: 20
    
  },
}));


//typeography
const useStylestypegrapgy = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});


export default function Country() {
  const classes = useStyles();

  const classestype = useStylestypegrapgy();


  //use context

  //date
  var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();


  return (
    <div className={classes.root}>
      <Grid container >

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>

            <div className={classestype.root}>
              <Typography variant="h4" gutterBottom style={{ color: 'orange', fontWeight: 'bolder' }}>
                Totalcase
              </Typography>
              <Typography variant="subtitle2" gutterBottom style={{ color: 'orange', fontSize: 20 }}>
                TOTAL INFECTED
            </Typography>
              <Typography variant="button" display="block" gutterBottom>
                {date}
              </Typography>
            </div>

          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>

            <div className={classestype.root}>
              <Typography variant="h4" gutterBottom style={{ color: 'green', fontWeight: 'bolder' }}>
              Totalcase
              </Typography>
              <Typography variant="subtitle2" gutterBottom style={{ color: 'green', fontSize: 20 }}>
                TOTAL RECOVERED
            </Typography>
              <Typography variant="button" display="block" gutterBottom>
                {date}
              </Typography>
            </div>

          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>

            <div className={classestype.root}>
              <Typography variant="h4" gutterBottom style={{ color: 'red', fontWeight: 'bolder' }}>
              Totalcase
              </Typography>
              <Typography variant="subtitle2" gutterBottom style={{ color: 'red', fontSize: 20 }}>
                TOTAL DEATH
            </Typography>
              <Typography variant="button" display="block" gutterBottom>
                {date}
              </Typography>
            </div>

          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}
