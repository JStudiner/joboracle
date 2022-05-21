import { Box ,FormControlLabel,FormGroup,Checkbox} from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { CHANGE_GOOD } from '../redux/actions'
export default function YesNo(question) {
    const dispatch=useDispatch()
    const [state,setState]=React.useState({
        yes: false,
        no: false
    })
    const handleChange= (event) => {
        
        if(no==false && yes==false){
           
            setState({
                ...state,
                [event.target.name]: event.target.checked,
              });
        } else{
        setState({
            ...state,
            
           yes: !yes,
           no:!no,

          });}
          dispatch({
            type: CHANGE_GOOD,
            payload:{
                id:question.id,
              value: !yes ||(yes&&no),
            }
        })
    }
    const { yes, no } = state;
  return (
    <Box><FormGroup>
    <FormControlLabel control={<Checkbox checked={yes} onChange={handleChange} name="yes"/>} label={question.positive} />
    <FormControlLabel control={<Checkbox checked={no} onChange={handleChange} name="no"/>} label={question.negative} />
  </FormGroup></Box>
  )
}
