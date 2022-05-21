import {initialState} from './initial-state'
import {CHANGE_GOOD,UPDATE_RESULT, UPDATE_SCORE,RESET,COMPLETED,TOGGLE_QUESTION_COMPLETED,CHANGE_RESPONSE} from "./actions"
import shortid from 'shortid';

function reducer(state=initialState,action){
    switch(action.type){
        case UPDATE_RESULT:{
            return state
        }
        case UPDATE_SCORE:{

            return state
        }
        case TOGGLE_QUESTION_COMPLETED:{
            const newQuestions=state.questions.map(question=>{if(question.id==action.payload.id){
                question.completed=!question.completed;
            }
                return question
            })
            const newState={
                ...state,
                questions: newQuestions
            }
            return newState
        }
        case CHANGE_RESPONSE:{
            console.log(action.payload.value)
            const newQuestions=state.questions
            newQuestions[action.payload.id].response=action.payload.value
            console.log(newQuestions)
            const newState={
                ...state,
                questions: newQuestions
            }
            return newState
        }
        case CHANGE_GOOD:{
            const newQuestions=state.questions;
            newQuestions[action.payload.id].good=action.payload.value
            const newState={
                ...state,
                questions: newQuestions
            }
            return newState
        }
        default:
            return state
    }
}
export default reducer