import React from 'react'
import "./Top.scss"

function Top() {
  return (
    // <div className='top__all'>
    <div  className='top'>
     <div className='top__all__top'>
     <div className='top__all__top__left'><i class="fa-solid fa-cart-shopping"></i> <p>www.alinino.az internet mağazasına xoş gəlmisiniz!</p></div>
      <div className='top__all__top__middle'><i class="fa-solid fa-phone"></i><p>Telefonla elə indi sifariş edin! <br /> +994 51 312 24 40 Zəng sifarişi</p></div>
      <div className='top__all__top__right'><i class="fa-solid fa-truck"></i> <p>Sifarişləri Bakıya, regionlara və dünya ölkələrinə çatdırırıq!</p></div>
      </div>
      <div>
        <p>
          <a href="https://api.whatsapp.com/send?phone=994513236262">WhatsApp dəstək: <i style={{color:"green", fontSize:"30px"}} class="fa-brands fa-whatsapp"></i></a>
        </p>
      </div>
    </div>
    //  </div>
  )
}

export default Top
