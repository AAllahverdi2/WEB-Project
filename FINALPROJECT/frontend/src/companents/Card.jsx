import React, { useContext } from 'react'
import "./Card.scss"
// import Maincontext from '../Context/Context'
import { Link, useNavigate } from 'react-router-dom'
import Rating from '@mui/material/Rating';
import { useUser } from '../Context/userContext';

function Card({ item }) {
  const { addtoBasket,User } = useUser()
  const navigate=useNavigate()
  const handlerBasket=(product)=>{
    if (User) {
      addtoBasket(product)
      
    }else{
navigate("/Giris")
    }
  }
  return (
    <div className='col-xl-2 col-lg-4 col-md-6 mr-4 mb-4 yAnesr'>
      <div class="card crd" style={{ width: "18rem;" }}>
        {/* <Link to={`/${item._id}`}> */}
        <div className='card__image__dur text-center'>
          <img src={item.image} class="card-img-top" alt="..." />
          {item.duration ? <div className='duration'>{item.duration}</div> : ""}
        </div>
          {/* </Link> */}
        <div class="card-body">
          <h6 class="card-title">{item.name}</h6>
          <Rating style={{ backgroundcolor: "orangered" }} name="read-only" value={item.raiting} readOnly />

          <p class="card-text"> {item.material}</p>
          <p>{item.yazar}</p>
          <div className="endirim">
          <del style={{color:"gray"}}>
<p  style={{width:"120%"}}>{item.firstPrice} AZn</p>
  </del>
            <p>{item.endirim}%</p>
          </div>
          <div className='nowPrice'><div className='nowPrice__price' style={{marginRight:"5px",fontSize:"15px"}}>{item.price} Azn</div>
            <button onClick={()=>handlerBasket(item)}><i class="fa-solid fa-basket-shopping"></i></button>
            <Link to={`/${item._id}`}><i class="fa-solid fa-eye"></i> </Link> 
          </div>
        </div>
      </div>
           


    </div>
    
   
  )
}

export default Card
