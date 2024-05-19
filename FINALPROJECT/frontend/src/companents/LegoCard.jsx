import React, { useContext } from 'react'
import Rating from '@mui/material/Rating';
// import Maincontext from '../Context/Context';
import "./Lego.scss"
import { Link } from 'react-router-dom'
import { useUser } from '../Context/userContext';
const LegoCard = ({item}) => {
  const { addtoBasket } = useUser()
  return (
    <div className='col-xl-2 col-lg-4 col-md-6 mr-4 mb-4 yAnesr legocard'>
      <Link to={`/${item._id}`}>
        <div class="card legocard" style={{width: "18rem;"}}>
  <img src={item.image} class="card-img-top" alt="..."/>
  {item.delivery ? <div className='deliver'>{item.delivery}</div> : ""}
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <Rating style={{ backgroundcolor: "orangered" }} name="read-only" value={item.raiting} readOnly />
    <p class="card-text">{item.material}</p>
    <div className='turk__endirim'>
    <del style={{color:"gray"}}>
<p >{item.firstPrice} AZn</p>
  </del>
                        <p>{item.endirim}%</p>

                    </div>
                    <div className='nowPriceTurk'><div className='nowPrice__price'>{item.price} Azn</div>
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

export default LegoCard
