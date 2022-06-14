import {initialState} from './initial-state'
import {CHANGE_GOOD,UPDATE_RESULT, UPDATE_SCORE,RESET,TOGGLE_QUESTION_COMPLETED,CHANGE_RESPONSE} from "./actions"

function reducer(state=initialState,action){
    
    switch(action.type){
        case RESET:{
            return initialState
        }
        case UPDATE_RESULT:{
            return state
        }
        case UPDATE_SCORE:{

            return state
        }
        case TOGGLE_QUESTION_COMPLETED:{
            const newQuestions=state.questions.map(question=>{if(question.id===action.payload.id){
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
            const newQuestions=state.questions
            newQuestions[action.payload.id].response=action.payload.value
            newQuestions[action.payload.id].answered=true
            const newState={
                ...state,
                questions: newQuestions
            }
            return newState
        }
        case CHANGE_GOOD:{
            const newQuestions=state.questions;
            newQuestions[action.payload.id].answered=true
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