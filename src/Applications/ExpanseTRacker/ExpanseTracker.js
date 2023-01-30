
import React,{useEffect} from 'react'
import { useGlobalContext } from '../../Context/Contenxt'
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
    <div className=' m-auto col-6'>
        <ExpanseDetails></ExpanseDetails>
        <ShowExpanseList></ShowExpanseList>
        <Form></Form>
    </div>
  )
}

export default ExpanseTracker