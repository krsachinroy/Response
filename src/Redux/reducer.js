import {signIn,signOut,addCard,signUp} from './action.js'
import {combineReducers} from 'redux'

const initialState = {
    id:'',
    email:'',
    password:'',
    logedIn:false
}
const Reducer = (state=initialState, action)=>{
    switch(action.type)
    {
        case signIn:
            return {
                id:action.payload.id,
                email:action.payload.email,
                password:action.payload.password,
                logedIn:action.payload.logedIn
            };
            
        case signOut:
            return{
                id:'',
                email:'',
                password:'',
                logedIn:''
            }
        default:
            return state;
    }
}
const cardData = [];
const cardReducer = (state=cardData,action)=>{
    switch(action.type)
    {
        case addCard:
            return [...state,{
                    cardId:action.payload.cardId,
                    name:action.payload.name,
                    itemName:action.payload.itemName,
                    description:action.payload.description,
                    serve:false}];
            
        default:
            return state;
    }
}
const userData = [];

const signupreducer = (state=userData,action)=> {
    switch(action.type)
    {
        case signUp:
            return [...state,{
                userId:action.payload.userId,
                name:action.payload.name,
                email:action.payload.email,
                password:action.payload.password
            }]
        default:
            return state;
    }
}

const ReducerCom = combineReducers({
     Reducer, 
     cardReducer,
     signupreducer
})
export default ReducerCom