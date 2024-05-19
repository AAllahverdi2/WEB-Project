import React, { useContext } from 'react'
import Maincontext from '../../Context/Context'
import Rating from '@mui/material/Rating';

const Lego = () => {
    const {HandlerFilterByAge,product,addtoBasket,HandlerFilterbyName,HandlerFilterbyPrice,HandlerSerach,HandlerFilterBYYazar}=useContext(Maincontext)
  return (
    <div className='container'>
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px", marginTop:"20px"}}>
      <div className='boss' style={{width:"30%", height:"12px",backgroundColor:"#f6f6f6"}}></div>
      <div  style={{fontSize:"20px"}}><strong>Lego konstruktorlar</strong></div>
      <div className='boss'style={{width:"30%", height:"12px",backgroundColor:"#f6f6f6", }}></div>
      </div>
    <div  style={{marginTop:"20px", display:"flex", gap:"10px"}}>
    <select style={{width:"180px", height:"40px"}} name="" id="" onChange={(e)=>{
          HandlerFilterbyName(e)
        }}>
          <option value="df">Default</option>
          <option value="AZ">A-dan Z-ə</option>
          <option value="ZA">Z-den A-ya</option>
        </select>

        <select style={{width:"180px", height:"40px"}} name="" id="" onChange={(e) => HandlerFilterbyPrice(e)}>
        <option value="09">Azdan Coxa Qiymet</option>
        <option value="90">Coxdan Aza Qiymet</option>
      </select>
      <input style={{width:"280px", height:"40px"}} type="text" placeholder='serch' onChange={(e) => {
        HandlerSerach(e.target.value)
      }} />
      <select style={{width:"180px", height:"40px"}} name="" id="" onChange={(e)=>{
        HandlerFilterByAge(e)
      }}>
        <option value="df">Default</option>
        <option value="16">16 - yaslar ucun</option>
        <option value="18">18 + yaslar ucun</option>
      </select>
    </div>
      
        <div className="row"  style={{marginTop:"30px"}}>
            {
                product.map((item,index)=>{
                    if(item.categories=="Lego konstruktorlar"){
                        return(
                            <div className='col-xl-2 col-lg-4 col-md-6 mr-4 mb-4 yAnesr legocard'>
                            <div class="card legocard" style={{width: "18rem;"}}>
                      <img src={item.image} class="card-img-top" alt="..."/>
                      {item.delivery ? <div className='deliver'>{item.delivery}</div> : ""}
                      <div class="card-body">
                        <h5 class="card-title">{item.name}</h5>
                        <Rating style={{ backgroundcolor: "orangered" }} name="read-only" value={item.raiting} readOnly />
                        <p class="card-text">{item.material}</p>
                        <div className='turk__endirim'>
                                            <p >{item.firstPrice}</p>
                                            <p>{item.endirim}%</p>
                    
                                        </div>
                                        <div className='nowPriceTurk'><div className='nowPrice__price'>{item.price} Azn</div>
                                <button onClick={() => {
                                  addtoBasket(item)
                                }}><i class="fa-solid fa-basket-shopping"></i></button>
                              </div>
                      </div>
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

export default Lego
