import { AppBar, Box, IconButton, Paper, Toolbar, Typography,Container } from "@material-ui/core";
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import {makeStyles} from "@material-ui/core";
import React from "react";
import QuestionList from "./components/QuestionList";
import { useDispatch } from "react-redux";
import { RESET } from "./redux/actions";
import Modal from "./Modal"
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
        
        borderRadius: "50px"
    },
    wrapper:{
        textAlign: "center",
        width: "100%",
        backgroundColor: 'white',
        borderRadius: "25px"
    },
    reset:{
        marginLeft: "auto",
    },
    introText:{
        color: 'white',
        paddingLeft: 50,
        paddingRight:50,
        paddingTop: 20,
        textAlign: 'center'
    },
    outerBackground:{
       backgroundColor: '#757de8'
    },
    submitButton:{
        border: "3px solid #002984",
        backgroundColor: '#757de8'

    },
    submitText:{
        
        color: 'white'
    },
    wheel:{
        display: 'flex',
    alignItems: 'center',
        border: "3px solid #002984",
        marginLeft: "18%"

    }
    
}))

export default function Todos(){
    const dispatch=useDispatch()
    const handleReset =() => {
        window.location.reload(false);

        dispatch({
            type: RESET,
            payload:{
                
            }
        })
    }
    
    const classes=styles();
    return(<Box className={classes.root} sx={{flexGrow: 1}}>
       <AppBar position="static">
           <Toolbar>
                <IconButton edge="start" color ="inherit"  >
                    <img src="ballIcon.png" alt="Todos logo" style={imageStyle}></img>
                </IconButton>
                <Typography variant="h5">
                    JobOracle
                </Typography>
                <IconButton onClick={handleReset}edge="end" color ="inherit" className={classes.reset}>
                    <Typography variant="h6">
                        Reset
                    </Typography>
                    <RestartAltIcon sytle={imageStyle}/>
               </IconButton>
            </Toolbar>
        </AppBar>
        <Box className={classes.outerBackground}>
        <Typography variant="h6" className={classes.introText}>Welcome to JobOracle! to see if you will get rejected by the next company you apply for, you just need to answer a few simple questions!
        </Typography>
        
        <Container className={classes.appContainer}>
            <Box className={classes.outerBackground}>
                <Paper  sx={{borderRadius: '5%'}} className={classes.wrapper} elevation={0}><QuestionList/>
                    <Modal/>
                </Paper>
            </Box>
        </Container>
        </Box>

    </Box>)
}

var imageStyle ={
    flex: 1,
    width: "60px",
    height: "50px",
    aspectRatio: 1,
   
}