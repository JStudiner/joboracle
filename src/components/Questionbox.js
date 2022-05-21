import React from 'react'

import { FormControlLabel, FormGroup, ListItem,Checkbox, Typography, Box, FormControl,InputLabel,Select} from '@material-ui/core'
import {makeStyles} from "@material-ui/core";
import Dropdown from './Dropdown';
import YesNo from './YesNo';
const styles= makeStyles((theme)=>({
    title:{
        textAlign: 'center'
    },
}))
export default function Questionbox(question) {
    const id=question.id
    const type=question.type
   
    
    const typeRender=()=>{
        
        if(type===0){
            return (<Dropdown {...question}/>)
            }
        else if(type === 1){
            return <YesNo {...question}/>;
        }
    }
  return (
    <ListItem className={styles.title} dense>
        <Box>
            <Typography  variant="h6">{question.text}</Typography>
            {typeRender()}
        </Box>
    </ListItem>
  )
}
