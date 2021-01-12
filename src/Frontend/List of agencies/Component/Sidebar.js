import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor:'white',
    color:'black'
  },
  paperbutton:{

    margin:'10px'
  }
}));

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
            <Paper  className={classes.paperbutton} elevation={0}> 
          <Button
 
           
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Dashbord
          </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper elevation={0}  className={classes.paperbutton}> 
          <Button
              
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Dashbord
          </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper elevation={0}  className={classes.paperbutton}> 
          <Button
       
           
            className={classes.button}
            startIcon={<DeleteIcon />}
          >
            Dashbord
          </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper elevation={0}  className={classes.paperbutton}> 
          <Button
         
           
            className={classes.button}
            startIcon={<DeleteIcon  style={{color:'lightblue'}}/>}
          >
            Agencies
          </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
        <Paper elevation={0}  className={classes.paperbutton}> 
          <Button
          
           
            className={classes.button}
            startIcon={<DeleteIcon  />}
          >
            Dashbord
          </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
