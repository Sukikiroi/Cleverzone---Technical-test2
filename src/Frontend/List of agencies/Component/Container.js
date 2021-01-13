import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Sidebar from './Sidebar'
import Principal from './Principal'
import { Hidden } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  sidebar:{

height:'400px'
  },
  principal:{

    height:'500px'
      },
}));

export default function CenteredGrid({ID,Name}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container >
      <Hidden only="sm">
        <Grid item xs={2}>
          <Paper className={classes.sidebar} elevation={0}>
          <br></br>
              <Sidebar/>
          </Paper>
        </Grid>
       </Hidden>
        <Grid item xs={10}>
          <Paper className={classes.principal}  elevation={0}>
              <br></br>
              <Principal ID={ID}/>


          </Paper>
        </Grid>
        
      </Grid>
    </div>
  );
}
