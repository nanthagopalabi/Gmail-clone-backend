import { createSlice } from "@reduxjs/toolkit";
import UseApi from "../../../hook/useApi";
import { API_URLS } from "../../../service/centralUrl";



//creating cartslice

export const emailSlice=createSlice({
    name:"email",
    initialState:{inbox:[],send:[],draft:[],trash:[]},
    reducers:{
        //methods for the reducers
       getinbox:(state)=>{
        const getmail= UseApi(API_URLS.getInboxEmial).call({});
    
        // state.inbox.push(getmail.response)

       }       
        

    }


});


export const {getinbox}=emailSlice.actions
export default emailSlice.reducer;