import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

//import component
import { Globalcontext } from '../Global/Globalcontext';

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


export default function Maingrid() {
  const classes = useStyles();

  const classestype = useStylestypegrapgy();


  //use context
  let data = useContext(Globalcontext);
  console.log(data.total_cases)

  //date
  var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();


  if (data == '') {
    return "loading"
  }


  return (
    <div className={classes.root}>
      <Grid container >

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>

            <div className={classestype.root}>
              <Typography variant="h4" gutterBottom style={{ color: 'orange', fontWeight: 'bolder' }}>
                {data.total_cases}
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
                {data.total_recovered}
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
                {data.total_deaths}
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
