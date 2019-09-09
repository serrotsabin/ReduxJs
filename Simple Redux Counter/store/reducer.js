import c from '../Constants'

import {combineReducers} from 'redux'

let count 
const counterReducer = (state = {count:0}, action) =>{
    switch(action.type){
        case c.INCREMENT:
            count = state.count + action.payload
            return {
                ...state,
                count: count
            }
        case c.DECREMENT:
            count = state.count - action.payload
            return {
                ...state,
                count: count
            }
        case c.ADD:
            count = state.count + action.payload
            return {
                ...state,
                count: count
            }
        case c.SUBSTRACT:
            count = state.count - action.payload
            return {
                ...state,
                count: count
            } 
        default:
            return state
    } 
}

const resultsReducer = (state = {results:[]}, action) =>{
    switch(action.type){
        case c.STORE:
            let newResults
            newResults = state.results.filter(arr=>arr!==action.payload)
            newResults.push(action.payload)
            return {
                ...state,
                results: newResults
            }
        case c.REMOVE:
                newResults = state.results.filter((arr,key)=>key!==action.payload);
                return {
                    ...state,
                    results: newResults
                }
        default:
            return state
    }
}


export default  combineReducers({
    counter: counterReducer,
    results: resultsReducer
})