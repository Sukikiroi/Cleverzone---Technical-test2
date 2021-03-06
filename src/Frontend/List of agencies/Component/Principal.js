import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MaterialTable from 'material-table';
import Editabletable from './Editabletable'
import Paper from '@material-ui/core/Paper';
import { Hidden } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar({ID,Name}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
   
     <Editabletable ID={ID}/>
    </div>
  );
}
