import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AdminOrder = () => {
    const [orderData,setOrderData]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4007/order/").then(res=>{
            setOrderData(res.data)
            console.log("orderden",orderData)
        })
    },[])
  return (
    <div style={{marginTop:"90px"}}>
      {
        orderData.map((item,index)=>{
          return(
            <ul>
              <li>{item.email}</li>
            </ul>
          )
        })
      }
     
      
    </div>
  )
}

export default AdminOrder
