import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./Xeberler.scss"
const Xeberler = () => {
    const [xeberler,setXeberler]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:4007/xeberler/").then(res=>{
            console.log("xeber",res.data)
            setXeberler(res.data)
        })
    },[])
  return (
    <div className='container'>
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
                            </div>
    
                        </div>
                    )
                }
            })
        }
        </div>
        
      
      
    </div>
  )
}

export default Xeberler
