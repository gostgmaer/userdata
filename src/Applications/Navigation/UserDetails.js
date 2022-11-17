import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {

   const {userID} = useParams()
//    const userID = params.userID

console.log(useParams());

  return (
    <div>UserDetails About Details ID : {userID}</div>
  )
}

export default UserDetails