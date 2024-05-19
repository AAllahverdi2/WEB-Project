import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

const XeberAdmin = () => {
    const [xeberler,setXeberler]=useState([])


    const RemoveNewsData = (id) => {
      axios.delete(`http://localhost:4007/xeberler/${id}`).then(res => {
        const target = xeberler.find(prod => prod._id === id)
        xeberler.splice(xeberler.indexOf(target), 1)
        setXeberler([...xeberler])
        toast.success("deleted item")
  
      })
    }

    useEffect(()=>{
        axios.get("http://localhost:4007/xeberler/").then(res=>{
            console.log()
            setXeberler(res.data)
        })
    },[])
  return (
    <div className='containe' style={{backgroundColor:"black", color:"white"}}>
    <div className='xeberler__name'>
        <div className='bos'></div>
        <div><strong style={{fontSize:"25px"}}>Xəbərlər</strong></div>
        <div className='bos'></div>
    </div>
    
    <div className="row">
      
    {
        xeberler.map((item,index)=>{
            if(item.categories=="Xeberler"){

                return(
                    <div className='col-lg-12 xeberler'>
                        <div className='xeberler__img'><img src={item.image} alt="" /></div>
                        <div className='xeberler__text'>
                            <p style={{color:"gray"}}>{item.date}</p>
                            <p><strong style={{fontSize:"20px"}}>{item.name}</strong></p>
                            <p style={{fontSize:"20px"}}>{item.desc}</p>
                            <button style={{width:"200px", height:"50px", borderRadius:"10px", backgroundColor:"blue", color:"white"}} onClick={()=>{
                              RemoveNewsData(item._id)
                            }}>Delete News</button>
                        </div>

                    </div>
                )
            }
        })
    }
    </div>
    
  
  <Toaster/>
</div>
     

      
    
  )
}

export default XeberAdmin
