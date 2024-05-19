import React, { useContext } from 'react'
// import Maincontext from '../Context/Context'
import Rating from '@mui/material/Rating';
import { Link } from 'react-router-dom'
import { useUser } from '../Context/userContext';
function IngilisCard({item}) {
  const { addtoBasket } = useUser()
  return (
    <div className='col-xl-2 col-lg-4 col-md-6 mr-4 mb-4'>
      <Link to={`/${item._id}`}>
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
     <del style={{color:"gray"}}>
<p >{item.firstPrice} AZn</p>
  </del>
       <p>{item.endirim}%</p>
     </div>
     <div className='nowPrice'><div className='nowPrice__price'>{item.price} Azn</div>
       <button onClick={() => {
         addtoBasket(item)
       }}><i class="fa-solid fa-basket-shopping"></i></button>
     </div>
   </div>
 </div>
 </Link>
</div>
  )
}

export default IngilisCard
