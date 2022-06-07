import { FormControlLabel, FormGroup, ListItem,Checkbox, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles,Divider, List,Box} from '@material-ui/core'
import { useSelector } from 'react-redux';
import Questionbox from './Questionbox';
const styles=makeStyles(() =>( {
    root:
    {
    
    backgroundColor: "white"
    }
}));
export default function QuestionList() {
    const classes=styles();
    const {questions}=useSelector((state) => {
        return{
            questions:state.questions,
        }
    })
  return (
    <Box className={classes.root}>
                <List>
                {questions.map((question) => {
                    if(question.id==4){
                        if(questions[3].good===true){
                            return <Questionbox  {...question} />
                        }
                    }
                    else{
                    return <Questionbox  {...question} />
                    }
                }
                )}
                </List>
          
   </Box>
  )
}