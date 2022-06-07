import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AppBar, IconButton, Paper, Toolbar,Container,Divider } from "@material-ui/core";
import {makeStyles} from "@material-ui/core";
import { useSelector } from 'react-redux';
import MagicBall from './components/MagicBall'
import { useReducer } from 'react';
const styles=makeStyles((theme)=>({
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
    score: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        backgroundColor: 'white',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    wheel:{
                display: 'flex',
    alignItems: 'center',
        border: "3px solid red",
        marginRight: "50%",
        marginBottom:"20px"

    },
    scoreText:{
        textAlign:"center"
    },
    spinner:{
        textAlign:"center",
        margin: "auto",
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    outerPaper:{
        verticalAlign:"middle"
    }
    
}))


export default function BasicModal() {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const [open, setOpen] = React.useState(false);
    const [success, setSuccess]= React.useState(false);
    const[score,setScore]=React.useState(0);
    const[threshold,setThreshold]=React.useState(0);
    const {questions}=useSelector((state) => {
        return{
            questions:state.questions,
        }
    })
    const handleOpen = () => {
        setThreshold(calcThreshold(questions))
        setScore(calcScore(questions))
        handleActualOpen()
        
    }
    const handleActualOpen=()=>{
        setOpen(true);
    }
    const handleClose = () => setOpen(false);
    
    
  const classes=styles();
  return (
    <Paper className={classes.outerPaper}>{console.log(score>threshold)}
        <IconButton onClick={handleOpen} className={classes.submitButton} color="inherit">
                <img src="ballIcon.png" alt="Todos logo" style={imageStyle}></img>
                    <Typography variant="h6" className={classes.submitText}>
                        Calculate Chances
                    </Typography>
                <img src="ballIcon.png" alt="Todos logo" style={imageStyle}></img>
        </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        
      >
        <Box alignItems="center"
        justifyContent="center" className={classes.score}>
            <Typography id="modal-modal-title" variant="h6" component="h2" className={classes.scoreText}>
                    Let's find out if you will soon join {questions[0].response}!         
            </Typography>
            <MagicBall  energy={score>threshold}/>
                
        </Box>

      </Modal>
    </Paper>
  );
}
function calcScore(questions){
    var runningScore=0
    if(questions[2].good)runningScore+=500
    if(questions[3].good)runningScore+=2000
    if(!questions[4].good && questions[3].good)runningScore-=2000
    if(questions[5].good) runningScore+=750
    if(questions[6].response===questions[6].responses[0].name)runningScore+=0
    else if(questions[6].response===questions[6].responses[1].name) runningScore+=250
    else if(questions[6].response===questions[6].responses[2].name) runningScore+=750
    if(questions[7].good)runningScore+=750
    return runningScore
}
function calcThreshold(questions){
    var runningScore
    switch(questions[0].response){
        case "Google": 

            runningScore=3000
            break;
        case "Meta":
            runningScore=2900
            break;
        case "Netflix":
            runningScore=2800
            break;
        case "Tesla":
            runningScore=2700
            break;
        case "Amazon":
            runningScore=2600
            break;
        case "Microsoft":
            runningScore=2500
            break;
        case "Apple":
            runningScore=2400
            break;
        case "SalesForce":
            runningScore=2300
            break;
        case "Uber":
            runningScore=2200
            break;
        case "Twitter":
            runningScore=2150
            break;
        case "Airbnb":
            runningScore=2100
            break;
        case "Other (Large Company)":
            runningScore=2000
            break;
        case "Other(Mid-sized Company)":
            runningScore=1800
            break;
        case "Other(Startup)":
            runningScore=1500
            break;
        case "Unpaid Internship":
            runningScore=500
            break;
        default:
            runningScore=1000
    }

    switch(questions[1].response){
        case "Internship":
            runningScore*=0.33
            break;
        case "Junior Dev":
            runningScore*=0.66
            break;
        case "Senior Dev":
            runningScore*=1.33
            break;
        case "TechLead":
            runningScore*=2
            break;
        default:
            runningScore*=1
            
    }
    return runningScore
}
var imageStyle ={
    flex: 1,
    width: "60px",
    height: "50px",
    aspectRatio: 1,
   
}