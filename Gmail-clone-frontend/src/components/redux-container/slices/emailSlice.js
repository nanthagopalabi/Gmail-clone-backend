import { createSlice } from "@reduxjs/toolkit";
import UseApi from "../../../hook/useApi";
import { API_URLS } from "../../../service/centralUrl";

//creating cartslice
export const emailSlice=createSlice({
    name:"email",
    initialState:{user:{
        token:localStorage.getItem('token')||null,
        email:null
    },inbox:[],send:[],draft:[],trash:[]},
    reducers:{
        
        setToken:(state,action)=>{
            state.user.token=action.payload;
            console.log(action.payload);
            return
        },
        getToken:(state)=>{
         return state.user.token
        },
        setInbox:(state,action)=>{
          state.inbox.push(...action.payload);
    },

        //function to find mail clicked inbox
        openMessage:(state)=>{
        }
    }
});

export const {setToken,getToken,setInbox}=emailSlice.actions
export default emailSlice.reducer;