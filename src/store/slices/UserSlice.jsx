import { createSlice } from "@reduxjs/toolkit";
{/*
Slice is function that accept slice of name and initials state and 
object of reducer function and in reducer have multiple micro reducer function.
*/}

const usersSlice=createSlice({
    name:"name",  //slice of name
    initialState:[],  //initials state
    reducers:{       // object of reducer function
addUser(state,action){  //reducer have multiple micro reducer function
state.push(action.payload)  // means state per jo bhi data mil rahaa hoga ushe add kar denge
console.log(action.payload) 
},  
removeUser(state, action){
console.log("hii"+action.payload);
state.splice(action.payload,1)  //here 1 is delete item count  // splice() method 
            //in javascript is used to modify an array y adding or removing element
},  
clearAllUsers(state,action){
  return [];

}
       
    }
});






export default usersSlice.reducer;
export const {addUser,removeUser,clearAllUsers} =usersSlice.actions;