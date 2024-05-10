import { configureStore } from "@reduxjs/toolkit";
import  usersSlice  from "./slices/UserSlice";

const store=configureStore({  //it is accept only one object
    reducer:{
        users:usersSlice ,   //all slice in reducer of properties of access have in store
 
    },

});

export default store;