import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {MdDeleteForever} from "react-icons/all.js"
import { removeUser } from '../store/slices/UserSlice'
function DisplayUsers() {
const dispatch=useDispatch();

  const data=useSelector((state)=>{
return state.users;
     })
    // console.log(data); 
const deleteUser =(id)=>{
dispatch(removeUser(id))
}

  return (
    <>
      {
        data.map((user,id)=>{
          return <li key={id} className=' '> 
          {user}
          <button className=' btn-delete' onClick={()=>deleteUser(id)}>
            <MdDeleteForever className="delete-icon"/>
          </button>
          </li>
        })
      }
    </>
  )
}

export default DisplayUsers
