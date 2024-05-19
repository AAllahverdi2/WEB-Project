import React, { useContext } from 'react'
import Maincontext from '../../Context/Context'
import Rating from '@mui/material/Rating';

const Yaradiciliq = () => {
    const { product, addtoBasket,HandlerFilterbyName, HandlerFilterbyPrice,HandlerSerach} = useContext(Maincontext)

    return (
        <div className='container'>
            <div style={{display:"flex", justifyContent:"center", alignItems:"center", gap:"20px", marginTop:"20px"}}>
      <div className='boss' style={{width:"30%", height:"12px",backgroundColor:"#f6f6f6"}}></div>
      <div  style={{fontSize:"20px"}}><strong>Yaradiciliq Ve oyun</strong></div>
      <div className='boss'style={{width:"30%", height:"12px",backgroundColor:"#f6f6f6", }}></div>
      </div>
           <div  style={{marginTop:"20px", display:"flex", gap:"10px"}}>
           <select style={{width:"180px", height:"40px"}} name="" id="" onChange={(e) => {
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
                    product.map((item, index) => {
                        if (item.categories == "Yaradiciliq rəsmlər tikmə aplikasiya") {
                            return (
                                <div className='col-xl-2 col-lg-4 col-md-6 mr-4 mb-4 yAnesr'>
                                    <div class="card Mektebcard" style={{ width: "18rem;" }}>
                                        <img src={item.image} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">{item.name}</h5>
                                            <Rating style={{ backgroundcolor: "orangered" }} name="read-only" value={item.raiting} readOnly />
                                            {/* <p class="card-text">{item.material}</p> */}
                                            {/* <p><b>{item.yazar}</b></p> */}
                                            <div className='mekteb__endirim'>
                                                <p >{item.firstPrice}</p>
                                                <p>{item.endirim}%</p>

                                            </div>
                                            <div className='nowPriceMekteb'><div className='nowPrice__price'>{item.price} Azn</div>
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

export default Yaradiciliq
