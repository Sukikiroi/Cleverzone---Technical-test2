import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router";
import useLocalStorage from 'react-use-localstorage';
import Pictorlogin from './picturlogin.PNG'


const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${Pictorlogin})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#126cfb',
    width:'399px',
    height:'48px',
    '&:hover': {
      background: "#80ced6",
   },
  },
  password:{
    width:'399px',
    height:'48px',
  },
  email:{
    width:'399px',
    height:'48px',
  },
  dashu:{
color:'#126cfb',
width: '210px',
height: '89px',
fontFamily: 'GoogleSans',

  fontSize: '30px',
  fontWeight: 'bold',
  fontsTretch: 'normal',
  fontStyle: 'normal',
  lineHeight: '1.27',
  letterSpacing: 'normal',
  },
  remmeberme:{
position:'relative',
right:'70px',
bottom:'10px',

  }

  ,
  checked:{
color:'#126cfb',

  },
  forgot:{
position:'relative',
right:'40px'
  },
 
}));

export default function SignInSide() {
  const classes = useStyles();
  const [Email, setEmail] = useState(0);
  const [Password, setPassword] = useState(0);
  const [successful, setSuccessful] = useState(false);
  const [user, setuser] = useLocalStorage('user', 'aziz');
  const history = useHistory();
  const Handemail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };
  const HandPassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const Eb3tlna = () => {
    axios
      .post(`http://localhost:2000/signup`, { Password, Email })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };
  const handleLogin = (data) => {
    if (data.length == 0) {
      setSuccessful(false);
      console.log("Nay");
    } else {
      localStorage.clear();

      setSuccessful(true);
      localStorage.setItem("me", JSON.stringify(data[0].ID))
      localStorage.setItem("Name", JSON.stringify(data[0].Name))
      setuser(data[0].Name)
     
      history.push("/Agnecies");
     
    }
  };

  const verifilna = () => {
    axios
      .post(`http://localhost:2000/signin`, { Password, Email })
      .then((res) => {
        console.log(res.data);
        handleLogin(res.data);
      });
  };
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
     
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>

        <div className={classes.paper}>
         
          <Typography component="h1" variant="h5" className={classes.dashu}>
            Dashu
          </Typography>
          <form className={classes.form} noValidate>
            <TextField  className={classes.email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={Handemail}
            />
            <TextField className={classes.password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={HandPassword}
            />
            
            <Button
              onClick={verifilna}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              lOGIN
            </Button>
            <Grid container>
              <Grid item xs>
               
                <FormControlLabel className={classes.remmeberme}
              control={<Checkbox value="remember" color='primary' />}
              label="Remember me"
            />
              </Grid>
              <Grid item>
              <Link className={classes.forgot} href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
           
          </form>
        </div>
      </Grid>
   
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>
  );
}
