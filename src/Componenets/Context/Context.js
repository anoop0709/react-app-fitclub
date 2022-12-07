import { useState } from "react"
import {createStore} from "redux"

const loggeduser = {
    user:""

};

const reducer = (state = loggeduser,action)=>{
    console.log(action);
    switch(action.type){
        case "LOGGEDIN":
            return {
                ...state,
                user : action.payload

            }
         case "LOGGEDOUT":
             return {
                 ...state,
                 user:""
             } 
             default:
                 return{
                     state
                 }  
    }
}
const Store = createStore(reducer)


export default Store

