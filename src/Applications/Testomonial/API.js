import axios from 'axios'
import React, { useEffect } from 'react'
import { notifyerror } from '../../Utils/Notification/notify'



const API = ({setreviews,count}) => {

    useEffect(()=>{
       

        if (count>=1) {
            res()
        } else {
            notifyerror("Please increase The Value")
        }

       
    },[count])
 
    const res = async ()=>{
        const res = await axios.get(`https://testimonialapi.toolcarton.com/api/${count}`)
        setreviews(res.data)

    }
  
}

export default API