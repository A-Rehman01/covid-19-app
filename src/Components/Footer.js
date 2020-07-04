import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FlagIcon from '@material-ui/icons/Flag';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PublicIcon from '@material-ui/icons/Public';

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    marginTop: 60,
    // paddingTop:30
  },
  div: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    bottom: 0
  },
  icon: {
    marginLeft: 30,
    marginRight: 30,

  }
});

export default function Footer(props) {
  const classes = useStyles();

  if (props.value === 0) {
    return (

      <div className={classes.div}>
        <BottomNavigation
          value={props.value}
          onChange={(event, newValue) => {
            props.setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >

          <BottomNavigationAction className={classes.icon} label="World" icon={<PublicIcon style={{ fontSize: 32 }} />} style={{ color: 'red', fontWeight: 'bolder' }} />
          <BottomNavigationAction className={classes.icon} label="Country" icon={<FlagIcon style={{ fontSize: 28 }} />} style={{ color: 'grey' }} />

        </BottomNavigation>
      </div>

    );
  }

  else {
    return (
      <div className={classes.div}>
        <BottomNavigation
          value={props.value}
          onChange={(event, newValue) => {
            props.setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >

          <BottomNavigationAction className={classes.icon} label="World" icon={<PublicIcon style={{ fontSize: 28 }} />} style={{ color: 'grey' }} />
          <BottomNavigationAction className={classes.icon} label="Country" icon={<FlagIcon style={{ fontSize: 32 }} />} style={{ color: 'red', fontWeight: 'bolder' }} />


        </BottomNavigation>
      </div>
    );
  }

}

