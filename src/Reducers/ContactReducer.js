import { createSlice } from "@reduxjs/toolkit";
import apiRequest from "./apiRequest";
import  data from "../Data/form.json"
const initialState={
    contacts:data.contacts
}
const APIWorkerS_URL= "http://localhost:8080/contacts"
const ContactSlice= createSlice({
    name:"contacts", 
    initialState,
    reducers:{
        submitForm:(state,action)=>{
         state.contacts=[...state.contacts,action.payload];
         console.log(state.contacts)
         const postWorkers = {
            method: "POST",
            headers: {
              'Content-type':'application/json'
            },
            body: JSON.stringify(action.payload) 
          }
          const WorkersResult = apiRequest(APIWorkerS_URL,postWorkers)
          alert(`details added succesfully`);
          console.log(WorkersResult);
        }
    }
})

export default ContactSlice.reducer;
export const {submitForm}=ContactSlice.actions;