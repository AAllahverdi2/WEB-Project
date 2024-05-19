import React, { useContext } from 'react'
import Rating from '@mui/material/Rating';
import Maincontext from '../../Context/Context';

const Puzzle = () => {
    const {product,addtoBasket,HandlerFilterbyName,HandlerFilterbyPrice,HandlerSerach}=useContext(Maincontext)

  return (
    <div className='container'>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px", marginTop:"20px"}}>
      <div className='boss' style={{width:"30%", height:"12px",backgroundColor:"#f6f6f6"}}></div>
      <div  style={{fontSize:"20px"}}><strong>Puzzle</strong></div>
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
      </div>
        <div className="row" style={{marginTop:"30px"}}>
            {
                product.map((item,index)=>{
                    if(item.categories=="Puzzle"){
                        return(
                            <div className='col-xl-2 col-lg-4 col-md-6 mr-4 mb-4'>
    <div class="card" style={{ width: "18rem;" }}>
   <div className='card__image__del'>
     <img src={item.image} class="card-img-top" alt="..." />
    {item.delivery? <div className='delivery'>{item.delivery}</div> : ""}
   </div>
   <div class="card-body">
     <h6 class="card-title">{item.name}</h6>
     <Rating style={{backgroundcolor:"orangered"}} name="read-only" value={item.raiting} readOnly />
     <p class="card-text"> {item.material}</p>
     <p>{item.yazar}</p>
     <div className="endirim">
       <p >{item.firstPrice}</p>
       <p>{item.endirim}%</p>
     </div>
     <div className='nowPrice'><div className='nowPrice__price'>{item.price} Azn</div>
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

export default Puzzle
