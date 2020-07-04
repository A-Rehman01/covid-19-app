import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Progressbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress style={{color:'red',margin:'0 auto'}} />
    </div>
  );
}
