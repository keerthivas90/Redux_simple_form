import { configureStore } from "@reduxjs/toolkit";

import ContactReducer from "./Reducers/ContactReducer";

export const store= configureStore({
    reducer:{
      
        contacts:ContactReducer
    }
})