import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



//import component
import { Globalcontext } from '../Global/Globalcontext';
import Country from './Country'
import Flag from './Flag';


const useStyles = makeStyles((theme) => ({
  root: {
  },
  dropdown:{
    marginTop:30,
    textAlign:'center'
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



//dropdown
const useStylesdropdown = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


export default function Dropdown() {
  const classes = useStyles();
  const classesdrop = useStylesdropdown();


  //use context
  let { apidatacountry } = useContext(Globalcontext);
  // console.log(apidatacountry);


  //dropdown
  const [age, setAge] = React.useState('Pakistan');
  const handleChange = (event) => {
    setAge(event.target.value);
  };



  return (
    <div className={classes.root}>
      <h1 className="heading">Country</h1>    
      <div className={classes.dropdown}>
      
      <FormControl className={classesdrop.formControl}>
        <InputLabel id="demo-simple-select-label">Country</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        > 
        {
            apidatacountry.map((Objdata,index)=>{
                return ( 
                <MenuItem key={index} value={Objdata.country}>{Objdata.country}</MenuItem>
                )
            })
        }    
        </Select>
      </FormControl>
        <Flag countryName={(age).toLowerCase()}/>        
      <Country countryName={age} />
    </div>
    </div>
  );
}
