import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import { Hidden } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
     
      <AppBar position="static">
        <Toolbar>
        <Hidden only="lg">
        
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
         
        </Hidden>
          <Typography variant="h6" className={classes.title}>
            Photos
          </Typography>
         
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              <Avatar alt="Cindy Baker" src="data:image/jpeg;base64,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" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
      
        </Toolbar>
      </AppBar>
    </div>
  );
}
