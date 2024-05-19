import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Rating from '@mui/material/Rating';
import "./Detail.scss"
import Maincontext from '../../Context/Context';
import { useUser } from '../../Context/userContext';
function Detail() {
  const {product}=useContext(Maincontext)
  const [detail,setDetail]=useState([])
  const { addtoBasket,User } = useUser()
  const navigate=useNavigate()

  const handlerBasket=(product)=>{
    if (User) {
      addtoBasket(product)
      
    }else{
navigate("/Giris")
    }
  }
    const {id}=useParams()
    useEffect(()=>{
        axios.get(`http://localhost:4007/alinino/${id}`).then(res=>{
            setDetail(res.data)
        })
    },[])
  return(

    
    <div className='detail__all'>
      <div className='detail__all__top'>
        <p><b>{detail.name}</b></p>
        {detail.raiting ? <p><Rating style={{ backgroundcolor: "orangered" }} name="read-only" value={detail.raiting} readOnly /></p> : ""}


        {/* <p><Rating style={{ backgroundcolor: "orangered" }} name="read-only" value={detail.raiting} readOnly /></p> */}
      </div>
            <div className='detail'>
             <img src={detail.image} alt="" />

<div className="detail__all__middle">
 {/* <div className='imagedetail'> <img src={detail.image} alt="" /></div> */}
 
    <div className='nesriyyat'>
   <div className='nesriyyat__text'> <b>Nesriyyat</b>: <strong color='blue'>Qanuni Nesriyyat</strong> </div>
   <div className='nesriyyat__yazar'><b>categories</b>: <strong>{detail.categories}</strong> </div>
     
    
  </div>
  <div className='nesriyyat__basket'>
        <div className="basket__top">
          <div className='basket__Price'>{detail.price} AZN</div>
          <div className='basket__button'>
            <button>-</button>
          {}
          <button>+</button>
          </div>
          <div className='sebete'><button onClick={()=>{
            handlerBasket(detail)
          }} >səbətə at</button></div>
          
        </div>
        <div className='besket__bos'></div>
        <div className="basket__buttom">
          <div><del><b style={{color:"gray", fontSize:"23px"}}>{detail.firstPrice}  AZN</b> </del></div>
          <div><p style={{fontSize:"23px", marginTop:"12px"}}>{detail.endirim} %</p></div>
          <div className='movcuddur' ><strong>Mövcuddur</strong></div>

        </div>

       

      </div>

      <div className='online'>
            <div className="online__in">Online ozel qiymet</div>
      </div>
      <div className='detail__end'>

      <div class="label_free_delivery snipcss-HmPUA">
  <i class="fa fa-arrow-circle-o-right">
  </i>
  <p>
    Sifarişləri Bakıya, Azərbaycanın bölgələrinə və bütün dünya ölkələrinə çatdırırıq!
  </p>
  <p>
    Bakı üzrə 30 manatdan yuxarı sifarişlərdə çatdırılma 
    <span style={{color:"#ff0000"}}>
      <strong>
        pulsuzdur
      </strong>
    </span>
    .
  </p>
  <p>
    <span style={{color:"#ff0000"}}>
      <strong>
      </strong>
    </span>
    <span style={{color:"#ff0000"}}>
      <strong>
      </strong>
    </span>
    .
  </p>
  <div class="table-wrapper">
    <div class="table-row">
      <span class="table-row__first">
        Operativ çatdırırıq: 
      </span>
      <span class="table-row__second">
        24 saat ərzində * sürətli çatdırılma * poçtla * "Özün götür" xidməti ilə
      </span>
    </div>
    <div class="table-row">
      <span class="table-row__first">
        Ödəniş etmək asandır: 
      </span>
      <span class="table-row__second">
        onlayn kartla * pos-terminalla * hissə-hissə * kuryerə nəğd * MilliÖn və E-Manat  terminalları ilə
      </span>
    </div>
  </div>
</div>
      </div>
</div>
            </div>
          
          <div className="detail__buuton__text">
              <p>Alinino.az internet kitab mağazası kitabsevənlər üçün rahat servis xidməti göstərir. Əgər siz kitab almaq istəyirsinizsə, bu işdə bizim saytımız sizə yardımçı ola bilər. </p>
              <p>Mağazamızda kitablarla yanaşı hədiyyələr, elektronik mallar, oyuncaqlar, pazllar, məktəb üçün ləvazimatlar, ətriyyat, A.Salamaxinanın yaylığları və milli kəlağayıları da əldə edə bilərsiniz.</p>
            <p><strong style={{color:"red"}}>Alinino.az</strong> internet mağazamızdan kitab əldə etmək hər zaman rahat və əlverişlidir.</p>
          </div>

          
    </div>
  )
}

export default Detail

