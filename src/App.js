import { AppBar, Box, IconButton, Paper, Toolbar, Typography,Container,Divider,Button } from "@material-ui/core";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {makeStyles} from "@material-ui/core";

import React from "react";
import QuestionList from "./components/QuestionList";
const styles= makeStyles((theme)=>({
    root:{
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    margin: 0,
    padding: 0},
    appContainer:{
        paddingLeft: 100,
        paddingRight:100,
        marginTop:50,
    },
    wrapper:{
        textAlign: "center",
        width: "100%",
    },
    reset:{
        marginLeft: "auto",
    },
    introText:{
        color: 'black',
        paddingLeft: 50,
        paddingRight:50,
        paddingTop: 20,
        textAlign: 'center'
    }
}))

export default function todos(){
    const classes=styles();
    return(<Box className={classes.root} sx={{flexGrow: 1}}>
       <AppBar position="static">
           <Toolbar>
                <IconButton edge="start" color ="inherit" size="large" >
                    <img src="ballIcon.png" alt="Todos logo" style={imageStyle}></img>
                </IconButton>
                <Typography variant="h5">
                    JobOracle
                </Typography>
                <IconButton edge="right" color ="inherit" className={classes.reset}>
                    <Typography variant="h6">
                        Reset
                    </Typography>
                    <RestartAltIcon sytle={imageStyle}/>
               </IconButton>
            </Toolbar>
        </AppBar>
        <Typography variant="h6" className={classes.introText}>Welcome to JobOracle, to see if you will get rejected by the next company you apply for, you just need to answer a few simple questions!</Typography>
        <Container className={classes.appContainer}>
            <Paper className={classes.wrapper} elevation={0}><QuestionList/></Paper>
        </Container>
    </Box>)
}


var divStyle = {
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  margin: 0,
  padding: 0
}

var imageStyle ={
    flex: 1,
    width: "60px",
    height: "50px",
    aspectRatio: 1,
   
}