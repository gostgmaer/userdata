import { data, useGlobalContext } from 'Context/Contenxt'
import React,{useEffect} from 'react'
import ExpanseDetails from './ExpanseDetails'
import Form from './Form'
import ShowExpanseList from './ShowExpanseList'

const ExpanseTracker = () => {
  const {setExpanseHistory,ExpanseHistory }= useGlobalContext()
// useEffect(() => {
//   data.forEach(element => {
//     setExpanseHistory(element)
//   });
 
// }, [])

  return (
    <div className=' m-auto'>
        <ExpanseDetails></ExpanseDetails>
        <ShowExpanseList></ShowExpanseList>
        <Form></Form>
    </div>
  )
}

export default ExpanseTracker