import { createSlice } from "@reduxjs/toolkit";
import UseApi from "../../../hook/useApi";
import { API_URLS } from "../../../service/centralUrl";

//creating cartslice
export const emailSlice=createSlice({
    name:"email",
    initialState:{inbox:[],send:[],draft:[],trash:[]},
    reducers:{
        //methods for the reducers
    //getinbox:(state)=>{
    // const getmail= UseApi(API_URLS.getInboxEmial).call({});
        // state.inbox.push(getmail.response)
        setToken:(state, action)=>{
            state.user.token = action.payload;
        },
        getToken:(state)=>{
            return state.user.token
        },
        setInbox:(state, action)=>{
            state.inbox.push(...action.payload);
        }
    }
});

export const {setToken,getToken}=emailSlice.actions
export default emailSlice.reducer;