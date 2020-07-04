import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalHotelIcon from '@material-ui/icons/LocalHotel';
import NotificationsIcon from '@material-ui/icons/Notifications';
import NumberFormat from 'react-number-format';


//import component
import Countrychart from './Countrychart';
import Progressbar from './Progressbar'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  paper: {
    textAlign: 'center',
    margin: 10,
    color: theme.palette.text.secondary,
    marginTop: 20,
    padding: 10,

  },
}));


//typeography
const useStylestypegrapgy = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});



export default function Country({ countryName }) {

  //useEffectforSpecificCountryData
  const [apidatacountryspec, setapiDatacountryspec] = useState('');
    
  useEffect(() => {
    async function FetchSpecdata() {


      //specific
      let specificcounrtyresponse = await fetch('https://corona.lmao.ninja/v2/countries/' + countryName + '?yesterday&strict&query%20');
      let countspecdata = await specificcounrtyresponse.json();
      setapiDatacountryspec(countspecdata);
    }
    FetchSpecdata();
  }, [countryName]);

  // console.log(apidatacountryspec.population)
  const classes = useStyles();
  const classestype = useStylestypegrapgy();

  //date
  var today = new Date(),
    date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();

  //if data is not fetch
  
  if ((apidatacountryspec===''))  {
    return (
      <div>
        <Grid container >

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} style={{ borderBottom: '2px solid orange', boxShadow: '2px 2px 5px orange' }}>

              <div className={classestype.root}>
                <Typography variant="subtitle2" gutterBottom style={{ color: 'orange' }}>
                  <NotificationsIcon style={{ fontSize: 40 }} />
                </Typography>
                <Typography variant="h5" gutterBottom style={{ color: 'orange', fontWeight: 'bolder', fontFamily: 'Roboto Slab' }}>

                  <Progressbar />
                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ color: 'orange', fontSize: 16, fontFamily: 'Merriweather ' }}>
                  TOTAL INFECTED
             </Typography>
                <Typography variant="button" display="block" gutterBottom style={{ color: 'orange' }}>
                  {date}
                </Typography>
              </div>

            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} style={{ borderBottom: '2px solid green', boxShadow: '2px 2px 5px green' }}>

              <div className={classestype.root}>
                <Typography variant="subtitle2" gutterBottom style={{ color: 'green' }}>
                  <FavoriteIcon style={{ fontSize: 40 }} />
                </Typography>
                <Typography variant="h5" gutterBottom style={{ color: 'green', fontWeight: 'bolder', fontFamily: 'Roboto Slab' }}>
                  <Progressbar />
                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ color: 'green', fontSize: 16, fontFamily: 'Merriweather ' }}>
                  TOTAL RECOVERED
             </Typography>
                <Typography variant="button" display="block" gutterBottom style={{ color: 'green' }}>
                  {date}
                </Typography>
              </div>

            </Paper>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Paper className={classes.paper} style={{ borderBottom: '2px solid red', boxShadow: '2px 2px 5px red' }}>

              <div className={classestype.root}>

                <Typography variant="subtitle2" gutterBottom style={{ color: 'red' }}>
                  <LocalHotelIcon style={{ fontSize: 40 }} />
                </Typography>
                <Typography variant="h5" gutterBottom style={{ color: 'red', fontWeight: 'bolder', fontFamily: 'Roboto Slab' }}>
                  <Progressbar />
                </Typography>
                <Typography variant="subtitle2" gutterBottom style={{ color: 'red', fontSize: 16, fontFamily: 'Merriweather ' }}>
                  TOTAL DEATH
             </Typography>
                <Typography variant="button" display="block" gutterBottom style={{ color: 'red' }}>
                  {date}
                </Typography>
              </div>

            </Paper>
          </Grid>

        </Grid>

        <h2 className="grapheading">Graphical View</h2>
        <Progressbar />

      </div>
    );
  }


  return (
    <div>
      <Grid container >

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} style={{ borderBottom: '2px solid orange', boxShadow: '2px 2px 5px orange' }}>

            <div className={classestype.root}>
              <Typography variant="subtitle2" gutterBottom style={{ color: 'orange' }}>
                <NotificationsIcon style={{ fontSize: 40 }} />
              </Typography>
              <Typography variant="h5" gutterBottom style={{ color: 'orange', fontWeight: 'bolder', fontFamily: 'Roboto Slab' }}>

                <NumberFormat value={apidatacountryspec.cases} displayType={'text'} thousandSeparator={true} />

              </Typography>
              <Typography variant="subtitle2" gutterBottom style={{ color: 'orange', fontSize: 16, fontFamily: 'Merriweather ' }}>
                TOTAL INFECTED
            </Typography>
              <Typography variant="button" display="block" gutterBottom style={{ color: 'orange' }}>
                {date}
              </Typography>
            </div>

          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} style={{ borderBottom: '2px solid green', boxShadow: '2px 2px 5px green' }}>

            <div className={classestype.root}>
              <Typography variant="subtitle2" gutterBottom style={{ color: 'green' }}>
                <FavoriteIcon style={{ fontSize: 40 }} />
              </Typography>
              <Typography variant="h5" gutterBottom style={{ color: 'green', fontWeight: 'bolder', fontFamily: 'Roboto Slab' }}>
                <NumberFormat value={apidatacountryspec.recovered} displayType={'text'} thousandSeparator={true} />
              </Typography>
              <Typography variant="subtitle2" gutterBottom style={{ color: 'green', fontSize: 16, fontFamily: 'Merriweather ' }}>
                TOTAL RECOVERED
            </Typography>
              <Typography variant="button" display="block" gutterBottom style={{ color: 'green' }}>
                {date}
              </Typography>
            </div>

          </Paper>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} style={{ borderBottom: '2px solid red', boxShadow: '2px 2px 5px red' }}>

            <div className={classestype.root}>

              <Typography variant="subtitle2" gutterBottom style={{ color: 'red' }}>
                <LocalHotelIcon style={{ fontSize: 40 }} />
              </Typography>
              <Typography variant="h5" gutterBottom style={{ color: 'red', fontWeight: 'bolder', fontFamily: 'Roboto Slab' }}>

                <NumberFormat value={apidatacountryspec.deaths} displayType={'text'} thousandSeparator={true} />
              </Typography>
              <Typography variant="subtitle2" gutterBottom style={{ color: 'red', fontSize: 16, fontFamily: 'Merriweather ' }}>
                TOTAL DEATH
            </Typography>
              <Typography variant="button" display="block" gutterBottom style={{ color: 'red' }}>
                {date}
              </Typography>
            </div>

          </Paper>
        </Grid>

      </Grid>

      <Countrychart countryName={countryName} population={apidatacountryspec.population} Infected={apidatacountryspec.cases} Death={apidatacountryspec.deaths} Recovered={apidatacountryspec.recovered} />

    </div>
  );
}
