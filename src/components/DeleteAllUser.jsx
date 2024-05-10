import React from "react";
import styled from "styled-components";
import { clearAllUsers } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";
export const DeleteAllUser = () => {

const dispatch=useDispatch();

const deleteUsers=()=>{
  dispatch(clearAllUsers())
}


  return <Wrapper>
    <button className="clear-btn" onClick={deleteUsers}>Clear Users</button>
  </Wrapper>
}

const Wrapper=styled.section`
.clear-btn{
  text-tansform:capitalize;
  background-color:red ;
  margin-top:20px
}
`

export default DeleteAllUser