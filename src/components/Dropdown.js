import React,{useState} from 'react'
import { MenuItem,FormControlLabel, FormGroup, ListItem,Checkbox, Typography, Box, FormControl,InputLabel,Select} from '@material-ui/core'
import Questionbox from './Questionbox'
import { useDispatch } from 'react-redux'
import { CHANGE_RESPONSE } from '../redux/actions';

export default function Dropdown(question) {
const [response, setResponse] = useState('');

const dispatch=useDispatch();
const handleChange = (event) => {
    setResponse(event.target.value)
    dispatch({
        type: CHANGE_RESPONSE,
        payload:{
            id: question.id,
            value:event.target.value
        }
    })
 }
  return (
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{question.placeholder}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={response}
        label="Company"
        onChange={handleChange}
       
        defaultValue=""
      >
    {
        question.responses.map((response) => {
                    
                    return <MenuItem value={response.name}>{response.name}</MenuItem>
                }
        )}
  
      </Select>
    </FormControl>
  </Box>
  )
}
/*
   
*/