import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import KeyboardVoiceIcon from "@material-ui/icons/KeyboardVoice";
import Icon from "@material-ui/core/Icon";
import SaveIcon from "@material-ui/icons/Save";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import DashboardIcon from "@material-ui/icons/Dashboard";
import BusinessIcon from "@material-ui/icons/Business";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import SettingsIcon from "@material-ui/icons/Settings";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "white",
    color: "black",
  },
  paperbutton: {
    margin: "10px",
  },
}));

export default function IconLabelButtons() {
  const classes = useStyles();
  const history = useHistory();

  const handledashbord = () => {
    history.push("/dashbord");
  };
  const handlecategory = () => {
    history.push("/category");
  };
  const handlecompany = () => {
    history.push("/company ");
  };
  const handleagence = () => {
    history.push("/Agnecies");
  };
  const handlesettings = () => {
    history.push("/settings");
  };
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperbutton} elevation={0}>
            <Button
              onclick={handledashbord}
              className={classes.button}
              startIcon={<AvTimerIcon />}
            >
              Dashbord
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paperbutton}>
            <Button
              onclick={handlecategory}
              className={classes.button}
              startIcon={<DashboardIcon />}
            >
              Category
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paperbutton}>
            <Button
              onclick={handlecompany}
              className={classes.button}
              startIcon={<BusinessIcon />}
            >
              Company
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paperbutton}>
            <Button
              onclick={handleagence}
              className={classes.button}
              startIcon={
                <InsertInvitationIcon style={{ color: "lightblue" }} />
              }
            >
              Agencies
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={0} className={classes.paperbutton}>
            <Button
              onclick={handlesettings}
              className={classes.button}
              startIcon={<SettingsIcon />}
            >
              Settings
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
